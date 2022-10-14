import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormFields, OptionData } from '../../../assets/types';
import { useWidth } from '../../../hooks/use-width';
import { getIsEditMode } from '../../../store/app/app-selectors';
import { setEditMode } from '../../../store/app/app-slice';
import ParentRow from '../parent-row/parent-row';
import SvgCell from '../svg-cell/svg-cell';
import TableCell from '../table-cell/table-cell';
import styles from './children-row.module.scss';

type ChildrenRowProps = {
  item: OptionData;
};

function ChildrenRow({ item }: ChildrenRowProps): JSX.Element {
  const isRow = item.type === 'row';
  const isRoot = item.level === 1;
  const isNewRow = item.title === '';
  const [isEdit, setIsEdit] = useState(isNewRow);
  const { lineWidth, paddingLeft } = useWidth(item.level);
  const formRef = useRef<HTMLFormElement & FormFields>(null);
  const isEditMode = useSelector(getIsEditMode);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setEditMode(isEdit));
  }, [dispatch, isEdit]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement & FormFields> = (
    evt
  ) => {
    evt.preventDefault();
    console.log(evt.currentTarget.title.value);
    setIsEdit(false);
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
    if (isEditMode) return;
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
        <SvgCell isRow={isRow} item={item} />
        <TableCell value={item.title} isEdit={isEdit} type={'title'} />
        {isRow ? (
          <TableCell value={item.unit} isEdit={isEdit} type={'unit'} />
        ) : (
          <span></span>
        )}
        {isRow ? (
          <TableCell value={item.quantity} isEdit={isEdit} type={'quantity'} />
        ) : (
          <span></span>
        )}
        {isRow ? (
          <TableCell value={item.unitPrice} isEdit={isEdit} type={'unitPrice'} />
        ) : (
          <span></span>
        )}
        <TableCell value={item.price} type={'price'} />
        <button type='submit' hidden></button>
      </form>
      {item.children?.length && <ParentRow items={item.children} />}
    </div>
  );
}

export default ChildrenRow;
