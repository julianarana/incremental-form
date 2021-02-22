import React, { ChangeEvent, FocusEvent, ReactElement, useState } from 'react';
import styles from './TextField.module.scss';

interface TextFieldProps {
  id: string;
  label?: string;
  onChange?: (value: string) => void;
  onFocus?: (ev?: FocusEvent<HTMLInputElement>) => void;
  value?: string;
}

export const TextField = ({
  id,
  label,
  onChange,
  onFocus,
  value,
}: TextFieldProps): ReactElement => {
  const state = useState({ touched: false });
  return (
    <div className={styles.textField}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type="text"
        value={value}
        id={id}
        onChange={(ev?: ChangeEvent<HTMLInputElement>) =>
          onChange(ev.target.value)
        }
        onFocus={onFocus}
      />
      <div className={styles.textField__error}>This is an error example</div>
    </div>
  );
};
