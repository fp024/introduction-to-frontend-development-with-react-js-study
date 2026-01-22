import { useState } from 'react';
import { container, button, active } from './App.css.ts';

function App() {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div className={container}>
      <button type="button" className={`${button} ${isActive && active}`} onClick={toggleActive}>
        Click me
      </button>
    </div>
  );
}

export default App;
