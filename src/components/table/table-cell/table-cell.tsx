import { useState } from 'react';
import TableInput from '../table-input/table-input';
import styles from './table-cell.module.scss';

type TableCellProps = {
  isEdit?: boolean;
  value: string | number;
  setIsEdit?: React.Dispatch<React.SetStateAction<boolean>>;
  isNewRow?: boolean;
  type: string;
};

function TableCell({
  isEdit,
  value,
  setIsEdit,
  isNewRow,
  type,
}: TableCellProps): JSX.Element {
  const [currentValue, setCurrentValue] = useState<string>(value.toString());

  return (
    <td className={styles.cell}>
      {isEdit ? (
        <TableInput
          type={type}
          value={currentValue}
          setCurrentValue={setCurrentValue}
          setIsEdit={setIsEdit}
          isNewRow={isNewRow}
        />
      ) : (
        <span>{currentValue}</span>
      )}
    </td>
  );
}

export default TableCell;
