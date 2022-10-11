import styles from './user-info.module.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function UserInfo(): JSX.Element {
  return (
    <div className={styles.info}>
      <img src='/images/avatar.png' alt='avatar' width={28} height={28} />
      <span>Антон Петров</span>
      <button type='button' aria-label='open'>
        <ExpandMoreIcon/>
      </button>
    </div>
  );
}

export default UserInfo;
