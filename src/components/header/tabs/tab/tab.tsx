import styles from './tab.module.scss';

type TabProps = {
  children: string;
  isActive?: boolean;
};

function Tab({ children, isActive }: TabProps): JSX.Element {
  return (
    <li className={`${styles.tab} ${isActive ? styles.active : ''}`}>
      <a className={styles.link} href='todo'>{children}</a>
    </li>
  );
}

export default Tab;
