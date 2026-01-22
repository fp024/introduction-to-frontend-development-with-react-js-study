import classNames from 'classnames';
import Child from './components/Child';
import './App.css';

function App() {
  const isActive = true;
  return (
    <>
      <button type="button" className={classNames('btn', { 'is-active': isActive })}>
        App Button
      </button>
      <Child />
    </>
  );
}

export default App;
