export enum EntryType {
  CHECHBOX,
  RADIO, 
  SELECT,
  TEXTFIELD, 
}

export interface Form {
  name: string;
  steps: Step[];
}

export interface Step {
  name: string;
  entries: Entry[];
}

export interface Entry {
  id: string;
  label: string;
  type?: EntryType;
  validators?: Validator[] | Validator;
}

export interface Validator {
  test: (value: string) => boolean;
}
