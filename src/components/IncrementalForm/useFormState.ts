import { useEffect, useState } from 'react';
import { Entry, Step } from 'src/types';

interface MetaEntry extends Entry {
  error: string | null;
  isChanged: boolean;
  isTouched: boolean;
  isValid: boolean;
  value: string;
}

interface StepState {
  entries: MetaEntry[];
  error: string | null;
  isValid: boolean;
}

export interface FormState {
  currentStep: number;
  stepsState: StepState[];
}

export interface FormStateAndActions extends FormState {
  setNextStep: () => void;
  setPrevStep: () => void;
  setStep: (step: number) => void;
  updateEntry: (value: string, entryPosition: number) => void;
}

const INITIAL_STATE: FormState = {
  currentStep: 0,
  stepsState: [],
};

export const useFormState = (steps: Step[]): FormStateAndActions => {
  const [state, setState] = useState<FormState>(INITIAL_STATE);

  useEffect(() => {
    const stepsState = calculateInitialStepsState(steps);
    setState(() => ({ ...INITIAL_STATE, stepsState }));
  }, [steps]);

  const setNextStep = (): void => {
    if (state.currentStep < steps.length - 1) {
      setState(
        (oldState): FormState => ({
          ...oldState,
          currentStep: oldState.currentStep + 1,
        })
      );
    }
  };

  const setPrevStep = (): void => {
    if (state.currentStep > 0) {
      setState(
        (oldState): FormState => ({
          ...oldState,
          currentStep: oldState.currentStep - 1,
        })
      );
    }
  };

  const setStep = (currentStep: number): void => {
    setState((oldState): FormState => ({ ...oldState, currentStep }));
  };

  const updateEntry = (value: string, position: number): void => {
    const { currentStep, stepsState } = state;
    const newEntry = {
      ...stepsState[currentStep].entries[position],
      value,
      isTouched: true,
      isChanged: true,
    };

  };

  return { ...state, setNextStep, setPrevStep, setStep, updateEntry };
};

const calculateInitialStepsState = (steps: Step[]): StepState[] => {
  return steps.map(
    (step: Step): StepState => {
      const entries = calculateInitialEntriesValues(step.entries);
      return { ...step, isValid: false, entries, error: null };
    }
  );
};

const calculateInitialEntriesValues = (entries: Entry[]): MetaEntry[] => {
  return entries.map(
    (entry: Entry): MetaEntry => ({
      ...entry,
      error: null,
      isValid: false,
      isTouched: false,
      isChanged: false,
      value: '',
    })
  );
};
