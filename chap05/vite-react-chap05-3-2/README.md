# 5.3.2 tailwind-merge 라이브러리



### 설치

```sh
pnpm install tailwindcss @tailwindcss/vite
```

* [Installing Tailwind CSS with Vite - Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite)



### tailwind-merge 추가 설치

```sh
pnpm install tailwind-merge
```



### tailwind 기본 설정

* vite.config.ts : tailwindcss vite 플러그인 설정

  ```ts
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react';
  import tailwindcss from '@tailwindcss/vite';
  
  // https://vite.dev/config/
  export default defineConfig({
    plugins: [react(), tailwindcss()],
  });
  
  ```

* index.css

  ```css
  @import 'tailwindcss';
  
  ```

* main.tsx: index.css import

  ```tsx
  import { StrictMode } from 'react';
  import { createRoot } from 'react-dom/client';
  import App from './App.tsx';
  import './index.css'; // ✔️
  
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
  
  ```

  

  