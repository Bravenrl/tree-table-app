import styles from './table-body.module.scss';

function TableBody(): JSX.Element {
  return (
    <tbody className={styles.tableBody}>
      <tr>
        <td>1</td>
        <td>Статья работы 1</td>
        <td>м3</td>
        <td>1200</td>
        <td>850</td>
        <td>1020000</td>
      </tr>
    </tbody>
  );
}

export default TableBody;
