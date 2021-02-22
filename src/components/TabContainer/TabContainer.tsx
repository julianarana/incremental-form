import React, { PropsWithChildren, ReactElement, ReactNode } from 'react';
import { Tab } from './Tab';
import styles from './TabsContainer.module.scss';

interface TabContainerProps {
  currentTab?: number;
  onTabSelected?: (tab: number) => void;
  onPrevSelected?: () => void;
  onNextSelected?: () => void;
  tabNames: string[];
}

export const TabContainer = ({
  children,
  currentTab,
  onNextSelected,
  onPrevSelected,
  onTabSelected,
  tabNames,
}: PropsWithChildren<TabContainerProps>): ReactElement => {
  
  const onTabClicked = (selected: number): void => {
    if (onTabSelected) {
      onTabSelected(selected);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__tabs}>
        <Tab key="<" name="<" onClick={onPrevSelected} />
        {tabNames.map(
          (tabName: string, index: number): ReactNode => (
            <Tab
              isSelected={currentTab === index}
              key={index}
              name={tabName}
              onClick={() => onTabClicked(index)}
            />
          )
        )}
        <Tab key=">" name=">" onClick={onNextSelected} />
      </div>
      <div className={styles.container__content}>{children}</div>
    </div>
  );
};
