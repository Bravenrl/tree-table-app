import styles from './nav-item.module.scss';
import { ReactComponent as ItemIcon } from '../../../../assets/icons/icon.svg';

type NavItemProps = {
  item: string;
};

function NavItem({ item }: NavItemProps): JSX.Element {
  return (
    <li className={`${styles.item} ${item === 'СМР' ? styles.active : ''}`}>
      <a href='todo'>
        <ItemIcon />
        <span>{item}</span>
      </a>
    </li>
  );
}

export default NavItem;
