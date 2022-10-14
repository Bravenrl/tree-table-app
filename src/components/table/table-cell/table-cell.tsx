import React from 'react';
import TableInput from '../table-input/table-input';
import styles from './table-cell.module.scss';

type TableCellProps = {
  isEdit?: boolean;
  value: string | number;
  isNewRow?: boolean;
  type: string;
};

function TableCell({
  isEdit,
  value,
  isNewRow,
  type,
}: TableCellProps): JSX.Element {
  return (
    <div className={styles.cell}>
      {isEdit ? (
        <TableInput type={type} value={value.toString()} isNewRow={isNewRow} />
      ) : (
        <span>{value}</span>
      )}
    </div>
  );
}

export default TableCell;
