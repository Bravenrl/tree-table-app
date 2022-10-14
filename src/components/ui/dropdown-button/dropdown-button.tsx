import styles from './dropdown-button.module.scss';
import { ReactComponent as FileSvg } from '../../../assets/icons/file.svg';
import { useState } from 'react';
import { useOutsideClick } from '../../../hooks/use-outside-click';
import { useDispatch, useSelector } from 'react-redux';
import { getIsEditMode } from '../../../store/app/app-selectors';
import { OptionData } from '../../../assets/types';
import { newInitialData } from '../../../assets/data';
import { createRow } from '../../../store/app/app-slice';

type DropdownButtonProps = {
  item: OptionData;
  className: string;
};

function DropdownButton({ className, item }: DropdownButtonProps): JSX.Element {
  const isEditMode = useSelector(getIsEditMode);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClickAdd = (type: 'level' | 'row', parent: number | null) => {
    const newRow = { ...newInitialData, type, parent };

    dispatch(createRow(newRow));
    setIsOpen(false);
  };

  const handleClickOutside = () => {
    setIsOpen(false);
  };

  const ref = useOutsideClick<HTMLButtonElement>(handleClickOutside);

  return (
    <div
      className={`${styles.dropdown} ${className}`}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button type='button' ref={ref} disabled={isEditMode}>
        <FileSvg onClick={() => setIsOpen((prev) => !prev)} />
        {isOpen && (
          <ul className={styles.menu}>
            <li
              onClick={() =>
                handleClickAdd('level', item.currentParent ?? null)
              }
            >
              Добавить уровень
            </li>
            <li onClick={() => handleClickAdd('level', item.id)}>
              Добавить уровень ниже
            </li>
            <li onClick={() => handleClickAdd('row', item.id)}>
              Добавить расчёт
            </li>
          </ul>
        )}
      </button>
    </div>
  );
}

export default DropdownButton;
