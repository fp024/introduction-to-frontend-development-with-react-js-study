# 리액트 프런트엔드 개발 입문 - 스터디

> 이 시리즈의 [vue를 다룬 책](https://www.yes24.com/product/goods/126715267)도 잘보았어서, 구매해보았다. 😊



## 📖 책 정보

### 저자

* 김기수

### 판매처

* yes24
  * https://www.yes24.com/product/goods/151667493
* 교보문고
  * https://product.kyobobook.co.kr/detail/S000217326306





## 목차

### 01장. [리액트 시작하기](chap01)

### 02장. [JSX 개요](chap02)

### 03장. [컴포넌트](chap03)

### 04장. [컴포넌트 상태](chap04)

### 05장. [컴포넌트 스타일링](chap05)

### 06장. [실습: 계산기 만들기](chap06)

### 07장. [조건부 렌더링과 반복 렌더링](chap07)

### 08장. [폼 다루기](chap08)

### 09장. [실습: 할 일 관리 애플리케이션 만들기](chap09)

### 10장. [고유 아이디와 사이드 이펙트](chap10)

### 11장. [컴포넌트 최적화](chap11)

### 12장. [전역 상태 관리](chap12)

### 13장. [리액트 라우터로 라우팅 기능 사용하기](chap13)

### 14장. [비동기 데이터 통신과 처리 기법](chap14)

### 15장. [프로젝트: 나만의 블로그 만들기](chap15)





## 프로젝트 준비

> 예전 Vue 스터디 내용에서 npm 사용하던 것 에서 pnpm으로 전환 정도만 했다.

### 소스 포맷팅

prettier를 리포지토리단위로 설정하게 하기위해서, prettier 설치를 위해 리포지토리 루트에서 pnpm install이 필요하다.

```sh
pnpm install
```

💡VSCode나 WebStorm의 Prettier 플러그인이 하위디렉토리에서 실행하더라도 상위의 라이브러리와 설정을 자동으로 인식한다.

* 이번 프로젝트는 crlf를 구체적으로 명시하지 말고 auto 설정을 사용해보려고 했는데.. 기본 설정대로 lf로 설정했음.😅
  * [Options · Prettier # end-of-line](https://prettier.io/docs/en/options.html#end-of-line)




### node_modules 폴더의 내용 일괄 삭제

* [clean-node-modules-dir.bat](clean-node-modules-dir.bat)
* [clean-node-modules-dir.sh](clean-node-modules-dir.sh)



## 후기

* [서평](review.md)

