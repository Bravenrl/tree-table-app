import React from 'react';
import TableInput from '../table-input/table-input';
import styles from './table-cell.module.scss';

type TableCellProps = {
  isEdit?: boolean;
  value: string | number;
  setIsEdit?: React.Dispatch<React.SetStateAction<boolean>>;
  isNewRow?: boolean;
  type: string;
};

const RefTableCell = React.forwardRef(function TableCell(
  { isEdit, value, setIsEdit, isNewRow, type }: TableCellProps,
  ref: React.Ref<HTMLInputElement> | undefined
): JSX.Element {
  return (
    <td className={styles.cell}>
      {isEdit ? (
        <TableInput
          type={type}
          value={value.toString()}
          setIsEdit={setIsEdit}
          isNewRow={isNewRow}
          ref={ref}
        />
      ) : (
        <span>{value}</span>
      )}
    </td>
  );
});

export default RefTableCell;
