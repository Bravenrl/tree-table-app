import { useState } from 'react';
import TableInput from '../table-input/table-input';
import styles from './table-cell.module.scss';

type TableCellProps = {
  isEditable?: boolean;
  value: string | number;
};

function TableCell({ isEditable, value }: TableCellProps): JSX.Element {
  const [isEdit, setIsEdit] = useState(false);
  const [currentValue, setCurrentValue] = useState<string>(value.toString());

  const handleDoubleClick = () => {
    if (!isEditable) {
      return;
    }
    setIsEdit(true);
  };

  return (
    <td className={styles.cell} onDoubleClick={handleDoubleClick}>
      {isEdit ? (
        <TableInput
          value={currentValue}
          setCurrentValue={setCurrentValue}
          setIsEdit={setIsEdit}
        />
      ) : (
        currentValue
      )}
    </td>
  );
}

export default TableCell;
