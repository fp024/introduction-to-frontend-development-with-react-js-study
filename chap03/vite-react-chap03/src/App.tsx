export default function App() {
  const handleCapture = () => {
    console.log('Parent');
  };

  const handleBubble = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    console.log('Child');
  };

  return (
    <div onClick={handleCapture} style={{ padding: '50px', backgroundColor: '#f0f0f0' }}>
      Parent{' '}
      <button onClick={handleBubble} style={{ marginTop: '20px' }}>
        Click Me
      </button>
    </div>
  );
}
