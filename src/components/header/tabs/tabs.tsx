import { ReactNode } from 'react';
import styles from './tabs.module.scss';

type TabsProps = {
    children: ReactNode
};

function Tabs({children}:TabsProps): JSX.Element {
  return <nav className={styles.tabs}>
    <ul className={styles.wrapper}>
        {children}
    </ul>
  </nav>;
}

export default Tabs;
