# VSCode에서 IntelliSense나 자동완성이 동작하지 않을 때 해결 방법

VSCode 사용 중 TypeScript/JavaScript 코드에서 IntelliSense(자동완성)가 갑자기 동작하지 않거나 느려질 때가 있습니다. 이 경우 **TS Server**를 재시작하면 문제가 해결되는 경우가 많습니다.

## TS Server 재시작 방법

1. **명령 팔레트 열기**
   - Windows/Linux: `Ctrl` + `Shift` + `P`
   - macOS: `Cmd` + `Shift` + `P`

2. **명령어 검색**
   - 검색창에 `Restart TS Server`라고 입력합니다.

3. **명령어 실행**
   - `TypeScript: Restart TS Server` 항목을 선택하여 실행합니다.

하단 상태바에서 TS Server가 다시 초기화되는 것을 확인할 수 있으며, 이후 자동완성 기능이 정상적으로 동작하는지 확인해 보세요.
