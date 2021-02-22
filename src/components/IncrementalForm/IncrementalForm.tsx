import React, { ReactElement, ReactNode, useMemo } from 'react';
import { Form } from '../../types';
import { FormContent } from '../FormContent';
import { TabContainer } from '../TabContainer';
import styles from './IncrementalForm.module.scss';
import { useFormState } from './useFormState';

interface IncremantalFormProps {
  form: Form;
}

export const IncrementalForm = ({
  form,
}: IncremantalFormProps): ReactElement => {
  const { currentStep, setNextStep, setPrevStep, setStep, updateEntry } = useFormState(form.steps);

  const entries = useMemo(() => {
    return form.steps[currentStep].entries;
  }, [currentStep, form.steps]);

  const tabNames = useMemo(() => {
    return form.steps.map((step): string => step.name);
  }, [form.steps]);

  return (
    <section className={styles.form}>
      <h1>{form.name}</h1>
      <TabContainer
        tabNames={tabNames}
        currentTab={currentStep}
        onTabSelected={setStep}
        onPrevSelected={setPrevStep}
        onNextSelected={setNextStep}
      >
        <FormContent entries={entries} onChange={updateEntry} />
      </TabContainer>
    </section>
  );
};
