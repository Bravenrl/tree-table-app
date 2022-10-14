import { createRef, useRef, useState } from 'react';
import { OptionData } from '../../../assets/types';
import { useWidth } from '../../../hooks/use-width';
import ParentRow from '../parent-row/parent-row';
import SvgCell from '../svg-cell/svg-cell';
import TableCell from '../table-cell/table-cell';
import styles from './children-row.module.scss';

type ChildrenRowProps = {
  row: OptionData;
};

export type FormFields = {
  title: HTMLInputElement;
  unit: HTMLInputElement;
  quantity: HTMLInputElement;
  unitPrice: HTMLInputElement;
};

function ChildrenRow({ row }: ChildrenRowProps): JSX.Element {
  const isRow = row.type === 'row';
  const isRoot = row.level === 1;
  const isNewRow = row.title === '';
  const [isEdit, setIsEdit] = useState(isNewRow);
  const { lineWidth, paddingLeft } = useWidth(row.level);
  const formRef = useRef<HTMLFormElement & FormFields>(null);

  const handleSubmit: React.FormEventHandler<HTMLFormElement & FormFields> = (
    evt
  ) => {
    evt.preventDefault();
    console.log(evt.currentTarget.title.value);
  };

  const handleKeyDown = (evt: React.KeyboardEvent<HTMLFormElement>) => {
    if (evt.key === 'Escape') {
      setIsEdit(false);
    }
  };

  const handleDoubleClick = (
    evt: React.MouseEvent<HTMLFormElement, MouseEvent>
  ) => {
    evt.stopPropagation();
    setIsEdit(true);
  };

  // const handleClickOutside = () => {
  //   if (!isEdit) {
  //     return;
  //   }
  //   setIsEdit(false);
  // };

  // const ref = useOutsideClick<HTMLDivElement>(handleClickOutside);

  return (
    <div className={styles.children}>
      {!isRoot && (
        <div
          className={styles.horizontal}
          style={{ width: lineWidth + 2, left: paddingLeft + 1 }}
        ></div>
      )}
      <form
        className={styles.row}
        ref={formRef}
        onDoubleClick={handleDoubleClick}
        onKeyDown={handleKeyDown}
        onSubmit={handleSubmit}
      >
        <SvgCell isRow={isRow} level={row.level ?? 1} isEdit={isEdit} />
        <TableCell value={row.title} isEdit={isEdit} type={'title'} />
        {isRow ? (
          <TableCell value={row.unit} isEdit={isEdit} type={'unit'} />
        ) : (
          <span></span>
        )}
        {isRow ? (
          <TableCell value={row.quantity} isEdit={isEdit} type={'quantity'} />
        ) : (
          <span></span>
        )}
        {isRow ? (
          <TableCell value={row.unitPrice} isEdit={isEdit} type={'unitPrice'} />
        ) : (
          <span></span>
        )}
        <TableCell value={row.price} type={'price'} />
        <button type='submit' hidden></button>
      </form>
      {row.children?.length && <ParentRow items={row.children} />}
    </div>
  );
}

export default ChildrenRow;
