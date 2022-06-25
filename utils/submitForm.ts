import FormObject from '../types/FormObject';

const submitForm = async (form: FormObject) => {
  const response = await fetch('/api', {
    method: 'POST',
    body: JSON.stringify({ form }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  console.log(data);
};

export default submitForm;
