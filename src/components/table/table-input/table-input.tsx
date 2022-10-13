import { usePlaceholder } from '../../../hooks/use-placeholder';
import styles from './table-input.module.scss';

type TableInputProps = {
  value: string;
  setIsEdit?: (arg: boolean) => void;
  setCurrentValue: (arg: string) => void;
  isNewRow?: boolean;
  type: string;
};

function TableInput({
  value,
  setIsEdit,
  setCurrentValue,
  isNewRow,
  type,
}: TableInputProps): JSX.Element {
  const placeholder = usePlaceholder(type);

  const handleKeyDown = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (!setIsEdit) {
      return;
    }

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

  return (
    <input
      className={styles.input}
      required
      type={'text'}
      onChange={(event) => {
        setCurrentValue(event.target.value);
      }}
      value={value}
      onKeyDown={handleKeyDown}
      autoFocus={isNewRow && type === 'title'}
      placeholder={placeholder}
    />
  );
}

export default TableInput;
