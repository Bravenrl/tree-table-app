import MenuIcon from '@mui/icons-material/Menu';
import ReplyIcon from '@mui/icons-material/Reply';
import styles from './header.module.scss';
import TabSvg from './tabs/tab-svg/tab-svg';
import Tab from './tabs/tab/tab';
import Tabs from './tabs/tabs';
import UserInfo from './user-info/user-info';

// type HeaderProps = {};

function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <Tabs>
        <TabSvg>
          <MenuIcon />
        </TabSvg>
        <TabSvg>
          <ReplyIcon />
        </TabSvg>
        <Tab isActive>Просмотр</Tab>
        <Tab>Управление</Tab>
      </Tabs>
      <UserInfo/>
    </header>
  );
}

export default Header;
