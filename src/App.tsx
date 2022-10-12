import styles from './App.module.scss';
import Header from './components/header/header';
import Panel from './components/panel/panel';

function App() {
  return (
    <>
      <Header />
      <div className={styles.projectWrapper}>
        <Panel />
      </div>
    </>
  );
}

export default App;
