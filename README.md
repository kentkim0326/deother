# Deother — 회사 소개 사이트

[Deother Co., Ltd.](https://www.facebook.com/deotherme) 와 「Fighting Nations」 소개 페이지.
빌드 도구 없이 정적 파일만으로 동작한다 — 바로 열어도 되고 어디에든 올릴 수 있다.

## 구성

```
index.html    구조
styles.css    스타일 (어두운 화면, 붉은 강조색 하나)
i18n.js       번역 + 링크 + 영상 목록  ← 내용은 대부분 여기만 고치면 된다
app.js        언어 전환과 화면 그리기
assets/       로고, 커버, 소설 표지
```

## 내용 고치는 법

**글**을 고치려면 `i18n.js` 를 연다. 언어 10종(`en ko zh ja es pt fr de ru ar`)이
같은 모양으로 들어 있으니, **`en` 을 먼저 고치고 나머지를 맞추면** 구조가 어긋나지 않는다.

**영상**을 더하려면 `i18n.js` 위쪽 배열에 한 줄을 넣는다.

```js
// 개발 연표 (오래된 것부터)
const VIDEOS = [
  { id: "유튜브ID", date: "2026.01", label: "제목" },
];

// 언어별 주제가 (라벨은 그 언어의 자기 이름이라 번역이 필요 없다)
const LANG_VIDEOS = [
  { id: "유튜브ID", label: "Português" },
];
```

**링크**(itch.io, 소설, 발표자료, 페이스북)는 같은 파일 맨 위 `LINKS` 에 모여 있다.

## 확인

정적 파일이라 파일을 그냥 열면 되지만, 브라우저가 `file://` 에서 스크립트를 막는 경우가 있다.
그럴 땐 로컬 서버로 연다.

```
npx serve . -l 4321
```

## 주의

- 아랍어(`ar`)는 RTL이다. `app.js` 가 `<html dir>` 을 바꾸고,
  CSS는 `margin-inline-start` 같은 논리 속성을 써서 방향만 뒤집으면 되게 해두었다.
  좌우 관련 스타일을 새로 넣을 때 `left/right` 대신 논리 속성을 쓰면 아랍어가 깨지지 않는다.
- 유튜브는 `youtube-nocookie.com` 으로 임베드한다. 재생 전에는 추적 쿠키를 심지 않는다.
- 이미지는 `assets/` 에 두고 용량을 줄여서 넣는다. 소설 표지는 4MB 전체 표지에서
  앞표지만 잘라 139KB로 줄인 것이다.
