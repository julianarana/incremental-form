import { EntryType, Form } from '../types';

export const mockedForm: Form = {
  name: 'Example form',
  steps: [
    {
      name: 'First Step',
      entries: [
        {
          id: 'field_1',
          label: 'Example 1',
          type: EntryType.TEXTFIELD,
        },
        {
          id: 'field_2',
          label: 'Example 2',
          type: EntryType.TEXTFIELD,
        },
        {
          id: 'field_3',
          label: 'Example 3',
          type: EntryType.TEXTFIELD,
        },
        {
          id: 'field_4',
          label: 'Example 4',
          type: EntryType.TEXTFIELD,
        },
        {
          id: 'field_5',
          label: 'Example 5',
          type: EntryType.TEXTFIELD,
        },
        {
          id: 'field_6',
          label: 'Example 6',
          type: EntryType.TEXTFIELD,
        },
      ],
    },
    {
      name: 'Second Step',
      entries: [],
    },
    {
      name: 'Third Step',
      entries: [],
    },
  ],
};
