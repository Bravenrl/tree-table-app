import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormFields, OptionData } from '../../../assets/types';
import { useWidth } from '../../../hooks/use-width';
import { getIsEditMode } from '../../../store/app/app-selectors';
import { editCurrentRow, setEditMode } from '../../../store/app/app-slice';
import ParentRow from '../parent-row/parent-row';
import SvgCell from '../svg-cell/svg-cell';
import TableCell from '../table-cell/table-cell';
import styles from './children-row.module.scss';
import cx from 'classnames';

type ChildrenRowProps = {
  item: OptionData;
  isLast: boolean;
};

function ChildrenRow({ item, isLast }: ChildrenRowProps): JSX.Element {
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
    const { title, unit, quantity, unitPrice } = evt.currentTarget;

    const price = +quantity?.value * +unitPrice?.value;

    const currentRow = {
      id: item.id,
      title: title.value,
      unit: unit?.value ?? '',
      quantity: quantity?.value ? +quantity?.value : 0,
      unitPrice: unitPrice?.value ? +unitPrice?.value : 0,
      price: price ? price : 0,
      parent: item.currentParent || null,
      type: item.type,
    };

    dispatch(editCurrentRow(currentRow));

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

  return (
    <div className={styles.children}>
      {!isRoot && (
        <div
          className={styles.horizontal}
          style={{ width: lineWidth + 2, left: paddingLeft + 1 }}
        ></div>
      )}
      {!isRoot && (
        <div
          className={cx(styles.vertical, { [styles.last]: isLast })}
          style={{ left: paddingLeft }}
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
          <TableCell
            value={item.unitPrice}
            isEdit={isEdit}
            type={'unitPrice'}
          />
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
