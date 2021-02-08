import React, { ReactElement } from 'react';
import styles from './Tab.module.scss';

interface TabProps {
  isSelected?: boolean;
  name: string;
  onClick?: () => void;
}

export const Tab = ({ isSelected, name, onClick }: TabProps): ReactElement => {
  return (
    <div
      onClick={onClick}
      className={!isSelected ? styles.tab : styles.tab__selected}
    >
      <a href="#" onClick={onClick}>
        {name}
      </a>
    </div>
  );
};
