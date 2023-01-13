import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/action';

export default function FormInputHooks({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();

    dispatch(addContact(name, number));
    // onSubmit(name, number);

    reset();
  };

  const handleInputChange = event => {
    // console.log(event.currentTarget.value);
    setName(event.currentTarget.value);
  };
  const handleInputNumberChange = event => {
    setNumber(event.currentTarget.value);
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div>
      <h1>form</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleInputChange} />
        <input
          type="number"
          value={number}
          onChange={handleInputNumberChange}
        />

        <button>Add contact</button>
      </form>
    </div>
  );
}
