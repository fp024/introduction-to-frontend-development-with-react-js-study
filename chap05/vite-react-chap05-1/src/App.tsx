import styles from './App.module.css';
import Child from './components/Child';

function App() {
  return (
    <>
      <button type="button" className={styles.btn}>
        App Button
      </button>
      <Child />
    </>
  );
}

export default App;
