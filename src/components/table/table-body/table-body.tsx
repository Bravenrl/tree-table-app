import { data } from '../../../assets/data';
import SvgCell from '../svg-cell/svg-cell';
import TableCell from '../table-cell/table-cell';
import styles from './table-body.module.scss';

function TableBody(): JSX.Element {
  return (
    <tbody className={styles.tableBody}>
      {data.map((row) => {
        const isRow = row.type === 'row'
        return (
          <tr key={row.id}>
            <SvgCell parent={row.parent} isRow={isRow}/>
            <TableCell value={row.title} isEditable />
            <TableCell value={isRow?row.unit:''} />
            <TableCell value={isRow?row.quantity:''} isEditable={isRow} />
            <TableCell value={isRow?row.unitPrice:''} isEditable={isRow} />
            <TableCell value={row.price} />
          </tr>
        );
      })}
    </tbody>
  );
}

export default TableBody;
