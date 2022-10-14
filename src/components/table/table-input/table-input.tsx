import React from 'react';
import { usePlaceholder } from '../../../hooks/use-placeholder';
import styles from './table-input.module.scss';

type TableInputProps = {
  value: string;
  isNewRow?: boolean;
  type: string;
};

function TableInput({ value, isNewRow, type }: TableInputProps): JSX.Element {
  const placeholder = usePlaceholder(type);

  return (
    <input
      name={type}
      id={type}
      className={styles.input}
      required
      type={'text'}
      defaultValue={value}
      autoFocus={isNewRow && type === 'title'}
      placeholder={placeholder}
    />
  );
}

export default TableInput;
