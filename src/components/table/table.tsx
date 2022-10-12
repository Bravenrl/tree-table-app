import TableBody from './table-body/table-body';
import TableHeader from './table-header/table-header';
import styles from './table.module.scss';

function Table(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <caption className={'visually-hidden'}>
          Строительно-монтажные работы
        </caption>
        <colgroup>
          <col className={styles.level} />
          <col className={styles.name} />
          <col className={styles.unit} />
          <col className={styles.quantity} />
          <col className={styles.price} />
          <col className={styles.total} />
        </colgroup>
        <TableHeader />
        <TableBody />
      </table>
    </div>
  );
}

export default Table;
