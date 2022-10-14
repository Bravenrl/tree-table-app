import { useEffect, useRef, useState } from 'react';
import { FormFields, OptionData } from '../../../assets/types';
import { gerBooleanValues } from '../../../assets/utils';
import { useHandlers } from '../../../hooks/use-handlers';
import ParentRow from '../parent-row/parent-row';
import SvgCell from '../svg-cell/svg-cell';
import TableCell from '../table-cell/table-cell';
import ConnectionLines from '../../ui/connection-lines/connection-lines';
import styles from './children-row.module.scss';
import { useDispatch } from 'react-redux';
import { setEditMode } from '../../../store/app/app-slice';

type ChildrenRowProps = {
  item: OptionData;
  isLast: boolean;
};

function ChildrenRow({ item, isLast }: ChildrenRowProps): JSX.Element {
  const { isNewRow, isRoot, isRow } = gerBooleanValues(item);
  const [isEdit, setIsEdit] = useState(isNewRow);
  const formRef = useRef<HTMLFormElement & FormFields>(null);
  const { handleDoubleClick, handleKeyDown, handleSubmit } = useHandlers(
    item,
    setIsEdit
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setEditMode(isEdit));
  }, [dispatch, isEdit]);

  return (
    <div className={styles.children}>
      <ConnectionLines isRoot={isRoot} isLast={isLast} item={item} />
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
          <TableCell value={item.unit??''} isEdit={isEdit} type={'unit'} />
        ) : (
          <span></span>
        )}
        {isRow ? (
          <TableCell value={item.quantity??0} isEdit={isEdit} type={'quantity'} />
        ) : (
          <span></span>
        )}
        {isRow ? (
          <TableCell
            value={item.unitPrice??0}
            isEdit={isEdit}
            type={'unitPrice'}
          />
        ) : (
          <span></span>
        )}
        <TableCell value={item.price??0} type={'price'} />
        <button type='submit' hidden></button>
      </form>
      {item.children?.length && <ParentRow items={item.children} />}
    </div>
  );
}

export default ChildrenRow;
