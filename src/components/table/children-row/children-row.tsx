import { useState } from 'react';
import { OptionData } from '../../../assets/types';
import { useOutsideClick } from '../../../hooks/use-outside-click';
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
      <div className={styles.row} onDoubleClick={handleDoubleClick} >
        <SvgCell isRow={isRow} level={row.level ?? 1} isEdit={isEdit}/>
        <TableCell value={row.title} isEdit={isEdit} setIsEdit={setIsEdit} type={'title'}/>
        {isRow ? (
          <TableCell
            value={isRow ? row.unit : ''}
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            type={'unit'} />
        ) : (
          <span></span>
        )}
        {isRow ? (
          <TableCell
            value={isRow ? row.quantity : ''}
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            type={'quantity'}
          />
        ) : (
          <span></span>
        )}
        {isRow ? (
          <TableCell
            value={isRow ? row.unitPrice : ''}
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            type={'unitPrice'}
          />
        ) : (
          <span></span>
        )}
        <TableCell value={row.price} type={'price'}/>
      </div>
      {row.children?.length && <ParentRow items={row.children} />}
    </tr>
  );
}

export default ChildrenRow;
