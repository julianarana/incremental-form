import React, { ReactElement } from 'react';
import styles from './TextField.module.scss';

interface TextFieldProps {
  id: string;
  label?: string;
  onChange?: () => void;
  value?: string;
}

export const TextField = ({
  label,
  id,
  onChange,
  value,
}: TextFieldProps): ReactElement => {
  return (
    <div className={styles.textField}>
      {label && <label htmlFor={id}>{label}</label>}
      <input type="text" value={value} id={id} onChange={onChange} />
    </div>
  );
};
