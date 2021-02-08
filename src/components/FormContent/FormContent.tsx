import React, { ReactElement, ReactNode } from 'react';
import { Entry } from 'src/types';
import { TextField } from '../TextField';
import styles from './FormContent.module.scss';

interface FormContentProps {
  entries: Entry[];
}

export const FormContent = ({ entries }: FormContentProps): ReactElement => {
  return (
    <>
      {entries.map(
        (entry: Entry, index: number): ReactNode => {
          return (
            <div className={styles.form__element} key={index}>
              <TextField label={entry.label} id={entry.id} />
            </div>
          );
        }
      )}
    </>
  );
};
