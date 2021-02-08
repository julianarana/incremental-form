import { useState } from 'react';

export interface FormState {
  currentStep: number;
}

export interface FormStateAndActions extends FormState {
  setStep: (step: number) => void;
}

const INITIAL_STATE: FormState = {
  currentStep: 0,
};

export const useFormState = (): FormStateAndActions => {
  const [state, setState] = useState<FormState>(INITIAL_STATE);

  const setStep = (currentStep: number): void => {
    setState((oldState): FormState => ({ ...oldState, currentStep }));
  };

  return { ...state, setStep };
};
