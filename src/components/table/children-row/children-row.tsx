import { OptionData } from '../../../assets/types';
import ParentRow from '../parent-row/parent-row';
import SvgCell from '../svg-cell/svg-cell';
import TableCell from '../table-cell/table-cell';
import styles from './children-row.module.scss';

type ChildrenRowProps = {
  row: OptionData;
};

function ChildrenRow({ row }: ChildrenRowProps): JSX.Element {
  const isRow = row.type === 'row';

  return (
    <li className={styles.children}>
      <div className={styles.row}>
        <SvgCell isRow={isRow} level={row.level ?? 1} />
        <TableCell value={row.title} isEditable />
        <TableCell value={isRow ? row.unit : ''} />
        <TableCell value={isRow ? row.quantity : ''} isEditable={isRow} />
        <TableCell value={isRow ? row.unitPrice : ''} isEditable={isRow} />
        <TableCell value={row.price} />
      </div>
      {row.children?.length && <ParentRow items={row.children} />}
    </li>
  );
}

export default ChildrenRow;
