import style from './App.module.css';
import classNames from 'classnames/bind';
import Child from './components/Child';

function App() {
  const isActive = true;
  const cx = classNames.bind(style);

  return (
    <>
      <button type="button" className={cx({ btn: true, 'is-active': isActive })}>
        App Button
      </button>
      <Child />
    </>
  );
}

export default App;
