import React from 'react';
import { IncrementalForm } from './IncrementalForm';
import { mockedForm } from '../__mocks__/steps';

export default function App() {
  return (
    <>
      <IncrementalForm form={mockedForm} />
    </>
  );
}
