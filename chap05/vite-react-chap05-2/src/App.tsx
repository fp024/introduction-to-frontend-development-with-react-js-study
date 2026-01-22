import styled from 'styled-components';
import './App.css';
import { useState } from 'react';

const Button = styled.button<{ $primary?: boolean }>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  margin: 0 1em;
  padding: 0.25em 1em;
  ${(props) =>
    props.$primary &&
    `
    background: #bf4f74;
    color: white;
  `}
`;

function App() {
  const [primary, setPrimary] = useState(false);

  const togglePrimary = () => {
    setPrimary(!primary);
  };

  return (
    <Button $primary={primary} onClick={togglePrimary}>
      Click Me
    </Button>
  );
}

export default App;
