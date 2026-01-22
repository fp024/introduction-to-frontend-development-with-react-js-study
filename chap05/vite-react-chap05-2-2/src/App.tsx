import { css } from '@emotion/css';
import './App.css';

function App() {
  return (
    <button
      type="button"
      className={css`
        cursor: pointer;
        background: transparent;
        border-radius: 3px;
        border: 2px solid #bf4f74;
        color: #bf4f74;
        margin: 0 1em;
        padding: 0.25em 1em;
      `}
    >
      Click Me
    </button>
  );
}

export default App;
