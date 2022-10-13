import { createRef, useState } from 'react';
import { OptionData } from '../../../assets/types';
import { useWidth } from '../../../hooks/use-width';
import ParentRow from '../parent-row/parent-row';
import SvgCell from '../svg-cell/svg-cell';
import TableCell from '../table-cell/table-cell';
import styles from './children-row.module.scss';

type ChildrenRowProps = {
  row: OptionData;
};

function ChildrenRow({ row }: ChildrenRowProps): JSX.Element {
  const isRow = row.type === 'row';
  const isRoot = row.level === 1;
  const isNewRow = row.title === '';
  const [isEdit, setIsEdit] = useState(isNewRow);
  const { lineWidth, paddingLeft } = useWidth(row.level);
  const titleRef = createRef<HTMLInputElement>();
  const unitRef = createRef<HTMLInputElement>();
  const quantityRef = createRef<HTMLInputElement>();
  const priceRef = createRef<HTMLInputElement>();
  const totalRef = createRef<HTMLInputElement>();

  const handleDoubleClick = (
    evt: React.MouseEvent<HTMLDivElement, MouseEvent>
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
    <tr className={styles.children}>
      {!isRoot && (
        <div
          className={styles.horizontal}
          style={{ width: lineWidth + 2, left: paddingLeft + 1 }}
        ></div>
      )}
      <div className={styles.row} onDoubleClick={handleDoubleClick}>
        <SvgCell isRow={isRow} level={row.level ?? 1} isEdit={isEdit} />
        <TableCell
          value={row.title}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          type={'title'}
          ref={titleRef}
        />
        {isRow ? (
          <TableCell
            value={row.unit}
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            type={'unit'}
            ref={unitRef}
          />
        ) : (
          <span></span>
        )}
        {isRow ? (
          <TableCell
            ref={quantityRef}
            value={row.quantity}
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            type={'quantity'}
          />
        ) : (
          <span></span>
        )}
        {isRow ? (
          <TableCell
            value={row.unitPrice}
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            type={'unitPrice'}
            ref={priceRef}
          />
        ) : (
          <span></span>
        )}
        <TableCell value={row.price} type={'price'} ref={totalRef} />
      </div>
      {row.children?.length && <ParentRow items={row.children} />}
    </tr>
  );
}

export default ChildrenRow;
