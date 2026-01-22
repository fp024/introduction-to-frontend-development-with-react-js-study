# 5.5.2 @font-fact로 웹 폰트 적용하기

> `@font-face`: 웹 페이지에서 서버에 있는 폰트 파일을 직접 불러와 사용하는 CSS 규칙
>
> 구글 폰트 외 대부분 웹 폰트 사이트는 `<link>`, `@import` 방식 대신 `@font-face` 방식으로 폰트를 제공함



### 눈누 ( https://noonnu.cc )

* 한글 웹폰트 무료 제공 사이트

* **SF함박눈** 글씨체

  * https://noonnu.cc/font_page/690

    ```css
    @font-face {
      font-family: 'SfHambakneun';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2106@1.1/SF_HambakSnow.woff')
        format('woff');
      font-weight: normal;
      font-display: swap;
    }
    
    .SfHambakneun {
      font-family: 'SfHambakneun', sans-serif;
    }
    ```

    > 💡 font-family 이름이 2026년 1월시점에는 책의 내용과는 달라진 것 같다.

