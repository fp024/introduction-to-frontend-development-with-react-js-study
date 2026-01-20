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

### pnpm 워크스페이스 구조

이 프로젝트는 [pnpm workspace](https://pnpm.io/workspaces)를 사용하여 여러 챕터의 프로젝트를 관리한다.

```yaml
# pnpm-workspace.yaml
packages:
  - 'chap*/*'
```

루트에서 모든 하위 프로젝트를 동시에 관리할 수 있다.


### 패키지 관리자 설정

이 프로젝트는 **pnpm**을 사용합니다. 각 프로젝트의 `package.json`에 `packageManager` 필드가 설정되어 있다.

#### pnpm 버전 변경

```bash
# 1. 루트 경로에서 pnpm 최신 버전 업데이트
corepack use pnpm@latest
```
> 하위 프로젝트의 package.json에는 packageManager을 정의하지 않고,
> 프로젝트 루트의 package.json 내용을 사용하므로 하위 프로젝트와 명시적으로 동기화 할 필요는 없다.

### 의존성 설치
```bash
# 프로젝트 루트 디렉토리에서 실행
pnpm run install-all
```

### 의존성 업데이트

```bash
# 프로젝트 루트 디렉토리에서 실행
# 안전한 범위 내 업데이트 (^, ~ 범위 내에서)
pnpm run update-all

# 최신 버전으로 업데이트 (메이저 버전 포함, 주의 필요!)
pnpm run update-latest
```

- `update-all`: `pnpm up -r` - 모든 워크스페이스 패키지를 semver 범위 내에서 업데이트
- `update-latest`: `pnpm up -r --latest` - 모든 워크스페이스 패키지를 최신 버전으로 업데이트

### 소스 포맷팅

prettier를 리포지토리 단위로 설정하게 하기 위해서, prettier 설치를 위해 리포지토리 루트에서 pnpm install이 필요하다.

```sh
pnpm install
```

소스 코드 포맷팅:

```bash
pnpm run format
```

💡VSCode나 WebStorm의 Prettier 플러그인이 하위 디렉토리에서 실행하더라도 상위의 라이브러리와 설정을 자동으로 인식한다.

* 이번 프로젝트는 crlf를 구체적으로 명시하지 말고 auto 설정을 사용해보려고 했는데.. 기본 설정대로 lf로 설정했음.😅
  * [Options · Prettier # end-of-line](https://prettier.io/docs/en/options.html#end-of-line)

### node_modules 폴더의 내용 일괄 삭제

각 챕터별 프로젝트의 `node_modules`를 일괄 삭제하는 스크립트

#### Windows

```bash
# 배치 파일 실행
clean-node-modules-dir.bat
```

#### Linux / macOS / WSL

```bash
# 쉘 스크립트 실행
bash clean-node-modules-dir.sh
```

**동작 방식:**
- ✅ `chap01/vite-react/node_modules` → 삭제됨

- ✅ `chap02/next-app/node_modules` → 삭제됨

- ❌ `node_modules` → 건너뜀 (루트 레벨)

- ❌ `node_modules/xxx/node_modules` → 건너뜀 (루트 하위)

  

### 주요 명령어 요약

```bash
# 설치
pnpm run install-all              # 루트 + 모든 워크스페이스 패키지 설치

# 업데이트
pnpm run update-all               # 안전한 범위 내 업데이트
pnpm run update-latest            # 최신 버전으로 업데이트 (주의!)

# pnpm 버전 관리
corepack use pnpm@버전            # pnpm 버전 변경

# 포맷팅
pnpm run format                   # 전체 코드 포맷팅

# 정리
clean-node-modules-dir.bat        # node_modules 일괄 삭제 (Windows)
bash clean-node-modules-dir.sh    # node_modules 일괄 삭제 (Linux/macOS)
```



## 후기

* [서평](review.md)