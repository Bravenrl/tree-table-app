import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './head.module.scss';


function Head(): JSX.Element {
    return <header className={styles.panelHeader}>
        <div className={styles.panelTitle}>
            <h2>Название проекта</h2>
            <h3>Аббревиатура</h3>
        </div>
        <button type='button' aria-label='open'>
        <ExpandMoreIcon/>
      </button>
    </header>;
}

export default Head;