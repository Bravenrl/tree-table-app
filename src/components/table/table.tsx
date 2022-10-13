import { optionData } from '../../assets/data';
import ParentRow from './parent-row/parent-row';
import TableBody from './table-body/table-body';
import TableHeader from './table-header/table-header';
import styles from './table.module.scss';

function Table(): JSX.Element {
  console.log(optionData);
  return (
    <div className={styles.wrapper}>
      <ParentRow items={optionData} />
    </div>
  );
}

export default Table;
