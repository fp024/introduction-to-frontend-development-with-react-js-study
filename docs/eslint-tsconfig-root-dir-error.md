# 모노레포 환경에서 ESLint Parsing Error (No tsconfigRootDir was set) 해결

## 증상 (Problem)
VS Code 워크스페이스를 모노레포 루트(`introduction-to-frontend-development-with-react-js-study`)에서 열었을 때, 하위 프로젝트(예: `chap03/vite-react-chap03-selfcheck`)의 `.ts`, `.tsx` 파일에서 다음과 같은 ESLint 파싱 에러가 발생합니다.

```text
Parsing error: No tsconfigRootDir was set, and multiple candidate TSConfigRootDirs are present:
 - C:\git\introduction-to-frontend-development-with-react-js-study\chap03\vite-react-chap03-selfcheck
 - ...
You'll need to explicitly set tsconfigRootDir in your parser options.
See: https://tseslint.com/parser-tsconfigrootdireslint
```

## 원인 (Cause)
`typescript-eslint` 파서가 타입 정보를 분석하기 위해 `tsconfig.json` 파일을 참조해야 하는데, 모노레포 구조에서는 다음 문제들이 발생할 수 있습니다.

1.  **CWD 불일치**: VS Code를 루트 폴더에서 열었기 때문에 ESLint 프로세스의 현재 작업 디렉터리(CWD)가 루트 폴더가 됩니다. 이로 인해 하위 프로젝트의 상대 경로 설정이 꼬일 수 있습니다.
2.  **경로 모호성**: 파서가 어떤 `tsconfig.json`을 기준으로 삼아야 할지 명확하지 않아 여러 후보군(Candidate TSConfigRootDirs)이 감지되고 충돌이 발생합니다.

## 해결 방법 (Solution)
각 하위 프로젝트의 `eslint.config.js` 파일에서 `parserOptions`를 설정하여 `tsconfigRootDir`를 **해당 설정 파일이 위치한 디렉터리의 절대 경로**로 고정해줍니다.

이를 위해 ESM(ECMAScript Module) 환경에서 `__dirname`을 구현하여 사용합니다.

### 수정 코드 예시

**파일**: 각 프로젝트의 `eslint.config.js`

1.  **경로 관련 유틸리티 Import 및 `__dirname` 정의**
    ```javascript
    import { fileURLToPath } from 'node:url';
    import { dirname } from 'node:path';

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    ```

2.  **`languageOptions`에 `parserOptions` 추가**
    ```javascript
    export default tseslint.config([
      // ...
      {
        files: ['**/*.{ts,tsx}'],
        // ...
        languageOptions: {
          ecmaVersion: 2020,
          globals: globals.browser,
          // 추가된 설정 👇
          parserOptions: {
            project: ['./tsconfig.node.json', './tsconfig.app.json'],
            tsconfigRootDir: __dirname, // 절대 경로로 고정
          },
        },
      },
    ]);
    ```

## 결과 (Result)
이 설정을 적용하면 ESLint가 실행되는 위치(루트 폴더 또는 하위 폴더)와 관계없이 항상 올바른 `tsconfig.json` 파일 위치를 `__dirname`을 통해 찾아가게 됩니다.

따라서:
-   모노레포 루트에서 VS Code를 열어도 에러가 발생하지 않습니다.
-   하위 프로젝트 폴더를 개별적으로 열어도 에러가 발생하지 않습니다.
