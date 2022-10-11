import { ReactElement } from 'react';
import styles from './tab-svg.module.scss';

type TabSvgProps = {
  children: ReactElement;
};

function TabSvg({ children }: TabSvgProps): JSX.Element {
  return (
    <li className={styles.tab}>
      <a className={styles.link} href='todo'>
        {children}
      </a>
    </li>
  );
}

export default TabSvg;
