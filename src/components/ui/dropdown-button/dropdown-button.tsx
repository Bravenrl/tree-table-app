import styles from './dropdown-button.module.scss';
import { ReactComponent as FileSvg } from '../../../assets/icons/file.svg';
import { useState } from 'react';
import { useOutsideClick } from '../../../hooks/use-outside-click';

type DropdownButtonProps = {
  level: number;
  className: string;
  isDisabled: boolean;
};

function DropdownButton({
  level,
  className,
  isDisabled,
}: DropdownButtonProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOutside = () => {
    setIsOpen(false);
  };

  const ref = useOutsideClick<HTMLButtonElement>(handleClickOutside);

  return (
    <div
      className={`${styles.dropdown} ${className}`}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button type='button' ref={ref} disabled={isDisabled}>
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
