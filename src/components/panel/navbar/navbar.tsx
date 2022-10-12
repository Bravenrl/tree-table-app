import { NavbarItems } from '../../../const';
import NavItem from './nav-item/nav-item';
import styles from './navbar.module.scss';

function Navbar(): JSX.Element {
  return (
    <nav className={styles.navbar}>
      <ul>
        {NavbarItems.map((item) => (
          <NavItem item={item} key={item} />
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
