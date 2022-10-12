import Head from './head/head';
import Navbar from './navbar/navbar';
import styles from './panel.module.scss';

function Panel(): JSX.Element {
  return (
    <aside className={styles.panel}>
      <Head />
      <Navbar/>
    </aside>
  );
}

export default Panel;
