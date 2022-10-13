import { optionData } from '../../../assets/data';
import ParentRow from '../parent-row/parent-row';
import SvgCell from '../svg-cell/svg-cell';
import TableCell from '../table-cell/table-cell';
import styles from './table-body.module.scss';

function TableBody(): JSX.Element {
  console.log(optionData);
  return (
    <div className={styles.tableBody}>
      
    </div>
  );
}

export default TableBody;
