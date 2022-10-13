import { useOutsideClick } from '../../../hooks/use-outside-click';
import styles from './table-input.module.scss';

type TableInputProps = {
  value: string;
  setIsEdit: (arg: boolean) => void;
  setCurrentValue: (arg: string) => void;
};

function TableInput({ value, setIsEdit, setCurrentValue }: TableInputProps): JSX.Element {
  const handleKeyDown = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (value === '') {
      return;
    }

    if (evt.key === 'Escape') {
      setIsEdit(false);
    }

    if (evt.key === 'Enter') {
      setIsEdit(false);
    }
  };

  const handleClickOutside = () => {
    if (value === '') {
      return;
    }
    setIsEdit(false);
  };

  const ref = useOutsideClick<HTMLInputElement>(handleClickOutside);

  return (
    <input
      className={styles.input}
      required
      ref={ref}
      type={'text'}
      onChange={(event) => {
        setCurrentValue(event.target.value);
      }}
      value={value}
      onKeyDown={handleKeyDown}
      autoFocus
    />
  );
}

export default TableInput;
