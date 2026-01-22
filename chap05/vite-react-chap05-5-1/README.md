# 5.5 폰트 적용하기 - @import 방식

> 웹폰트를 사용해보기!

### 구글 폰트

* http://fonts.google.com

* 나눔 팬 스크립트 (Nanum Pen Script)

  * https://fonts.google.com/specimen/Nanum+Pen+Script

  * head에 추가 (그런데, 책에서는 @import 부분을 index.css에다 넣었다.)

    ```html
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap');
    </style>
    ```

  * Nanum Pen Script: CSS class

    ```css
    .nanum-pen-script-regular {
      font-family: "Nanum Pen Script", cursive;
      font-weight: 400;
      font-style: normal;
    }
    ```

    





