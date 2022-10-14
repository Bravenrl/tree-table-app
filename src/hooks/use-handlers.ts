import { useDispatch, useSelector } from 'react-redux';
import { FormFields, OptionData } from '../assets/types';
import { getIsEditMode } from '../store/app/app-selectors';
import { editCurrentRow } from '../store/app/app-slice';

export const useHandlers = (item: OptionData, setIsEdit: (arg:boolean) => void) => {
  const dispatch = useDispatch();
  const isEditMode = useSelector(getIsEditMode);

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

  return {handleDoubleClick, handleSubmit, handleKeyDown}
};
