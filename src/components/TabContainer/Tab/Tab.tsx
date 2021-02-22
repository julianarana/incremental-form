import React, { ReactElement } from 'react';
import classnames from 'classnames/bind';
import styles from './Tab.module.scss';

const cx = classnames.bind(styles);

interface TabProps {
  isDisabled?: boolean;
  isSelected?: boolean;
  name: string;
  onClick?: () => void;
}

export const Tab = ({
  isDisabled,
  isSelected,
  name,
  onClick,
}: TabProps): ReactElement => {
  const className = cx('tab', {
    tab__selected: isSelected,
    tab__disabled: !isSelected && isDisabled,
  });

  const onSelectTab = () => {
    if (!isDisabled && onClick) {
      onClick();
    }
  };

  return (
    <div className={className}>
      <a href="#" onClick={onSelectTab}>
        {name}
      </a>
    </div>
  );
};
