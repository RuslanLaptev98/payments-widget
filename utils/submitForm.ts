import React from 'react';
import FormObject from '../types/FormObject';
import ResponseObject from '../types/ResponseObject';

const submitForm = async (
  form: FormObject,
  setSuccessMessage: React.Dispatch<React.SetStateAction<string>>
) => {
  const response = await fetch('/api', {
    method: 'POST',
    body: JSON.stringify({ form }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data: ResponseObject = await response.json();
  setSuccessMessage(`RequestId: ${data.RequestId}, Amount: ${data.Amount}`);
};

export default submitForm;
