import Table from '../table/table';
import styles from './main-content.module.scss';

function MainContent(): JSX.Element {
  return (
    <main className={styles.mainContent}>
      <h1 className={styles.title}>Строительно-монтажные работы</h1>
      <Table />
    </main>
  );
}

export default MainContent;
