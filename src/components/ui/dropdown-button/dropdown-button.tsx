import styles from './dropdown-button.module.scss';
import { ReactComponent as FileSvg } from '../../../assets/icons/file.svg';
import { useState } from 'react';
import { useOutsideClick } from '../../../hooks/use-outside-click';

type DropdownButtonProps = {
  level: number;
  className: string;
};

function DropdownButton({ level, className }: DropdownButtonProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOutside = () => {
    setIsOpen(false);
  };

  const ref = useOutsideClick<HTMLButtonElement>(handleClickOutside);

  return (
    <div className={`${styles.dropdown} ${className}`}>
      <button type='button' ref={ref}>
        <FileSvg onClick={() => setIsOpen((prev) => !prev)} />
        {isOpen && (
          <ul className={styles.menu}>
            <li>Добавить уровень</li>
            <li>Добавить уровень ниже</li>
            <li>Добавить расчёт</li>
          </ul>
        )}
      </button>
    </div>
  );
}

export default DropdownButton;
