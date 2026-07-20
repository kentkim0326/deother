# add-slides.ps1 — 슬라이드 이미지를 웹용으로 최적화해서 넣는다.
#
# 쓰는 법 (PowerShell 에서):
#   .\add-slides.ps1 fn        ← Downloads\fn-slides      → assets\slides-fn
#   .\add-slides.ps1 kingdom   ← Downloads\kingdom-slides  → assets\slides-kw
#
# 하는 일: 가로 1600px 로 줄이고 JPEG 82% 로 저장한 뒤,
#          i18n.js 의 FN_SLIDES / KW_SLIDES 배열을 파일 목록으로 갱신한다.

param([Parameter(Mandatory=$true)][ValidateSet('fn','kingdom','miliverse')][string]$Which)

Add-Type -AssemblyName System.Drawing

$cfg = @{
  fn        = @{ src = "$env:USERPROFILE\Downloads\fn-slides";        out = "assets\slides-fn"; var = 'FN_SLIDES'; prefix = 'fn' }
  kingdom   = @{ src = "$env:USERPROFILE\Downloads\kingdom-slides";   out = "assets\slides-kw"; var = 'KW_SLIDES'; prefix = 'kw' }
  miliverse = @{ src = "$env:USERPROFILE\Downloads\miliverse-slides"; out = "assets\slides-mv"; var = 'MV_SLIDES'; prefix = 'mv' }
}[$Which]

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$out  = Join-Path $root $cfg.out
New-Item -ItemType Directory -Path $out -Force | Out-Null

$all = Get-ChildItem $cfg.src -Include *.png,*.jpg,*.jpeg,*.webp -File -Recurse -EA SilentlyContinue | Sort-Object Name
if (-not $all) { Write-Host "  $($cfg.src) 에 이미지가 없습니다." -ForegroundColor Yellow; exit }

# 같은 그림을 두 번 받아둔 경우가 흔하다 ("파일 (1).png"). 내용 해시로 걸러낸다.
$seen = @{}; $files = @(); $dup = 0
foreach ($x in $all) {
  $h = (Get-FileHash $x.FullName -Algorithm MD5).Hash
  if ($seen[$h]) { $dup++ } else { $seen[$h] = 1; $files += $x }
}
if ($dup) { "  중복 $dup 장 제외 ($($all.Count) → $($files.Count))" }

# JPEG 인코더 (82% — 이 그림들은 디테일이 많아 그 아래로 내리면 뭉개진다)
$enc = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$p = New-Object System.Drawing.Imaging.EncoderParameters 1
$p.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality, 82)

$names = @(); $before = 0; $after = 0; $i = 0
foreach ($f in $files) {
  $i++
  $before += $f.Length
  $img = [System.Drawing.Image]::FromFile($f.FullName)
  $w = [Math]::Min(1600, $img.Width)
  $h = [int]($img.Height * $w / $img.Width)
  $bmp = New-Object System.Drawing.Bitmap $w, $h
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.InterpolationMode = 'HighQualityBicubic'
  $g.DrawImage($img, 0, 0, $w, $h)
  $g.Dispose()
  $name = "{0}-{1:d2}.jpg" -f $cfg.prefix, $i
  $dest = Join-Path $out $name
  $bmp.Save($dest, $enc, $p)
  $bmp.Dispose(); $img.Dispose()
  $after += (Get-Item $dest).Length
  $names += $name
  "  {0,-12} {1}x{2}  {3}KB" -f $name, $w, $h, [math]::Round((Get-Item $dest).Length/1KB)
}

# i18n.js 의 배열을 갱신 — 손으로 고치면 빠뜨리기 쉽다
$i18n = Join-Path $root "i18n.js"
$text = [System.IO.File]::ReadAllText($i18n, [System.Text.Encoding]::UTF8)
$list = ($names | ForEach-Object { '"' + $_ + '"' }) -join ', '
$text = [regex]::Replace($text, "const $($cfg.var) = \[[^\]]*\];", "const $($cfg.var) = [$list];")
[System.IO.File]::WriteAllText($i18n, $text, (New-Object System.Text.UTF8Encoding $false))

""
"  이미지 {0}장  |  {1}MB → {2}MB  ({3}% 절감)" -f $names.Count,
  [math]::Round($before/1MB,1), [math]::Round($after/1MB,1),
  [math]::Round((1 - $after/$before)*100)
"  i18n.js 의 $($cfg.var) 갱신 완료"
