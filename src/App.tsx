import styles from './App.module.scss';
import Header from './components/header/header';
import MainContent from './components/main-content/main-content';
import Panel from './components/panel/panel';

function App() {
  return (
    <>
      <Header />
      <div className={styles.projectWrapper}>
        <Panel />
        <MainContent />
      </div>
    </>
  );
}

export default App;
