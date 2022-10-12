import TableCell from '../table-cell/table-cell';
import styles from './table-body.module.scss';

function TableBody(): JSX.Element {
  return (
    <tbody className={styles.tableBody}>
      <tr>
        <td>1</td>
        <TableCell value={'Статья работы 1'} isEditable />
        <TableCell value={'m3'} />
        <TableCell value={1200} isEditable />
        <TableCell value={800} isEditable />
        <TableCell value={'1020000'} />
      </tr>
    </tbody>
  );
}

export default TableBody;
