import React from 'react';
import { usePlaceholder } from '../../../hooks/use-placeholder';
import styles from './table-input.module.scss';

type TableInputProps = {
  value: string;
  setIsEdit?: (arg: boolean) => void;
  isNewRow?: boolean;
  type: string;
};

const RefTableInput = React.forwardRef(function TableInput(
  { value, setIsEdit, isNewRow, type }: TableInputProps,
  ref: React.Ref<HTMLInputElement> | undefined
): JSX.Element {
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
      ref={ref}
      className={styles.input}
      required
      type={'text'}
      defaultValue={value}
      onKeyDown={handleKeyDown}
      autoFocus={isNewRow && type === 'title'}
      placeholder={placeholder}
    />
  );
});

export default RefTableInput;
