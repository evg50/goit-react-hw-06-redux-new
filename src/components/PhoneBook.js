import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../redux/action';
import { getContacts } from '../redux/selectors';

// import ContactItem from './ContactItem';
export default function PhoneBook() {
  const dispatch = useDispatch();
  const contactsList = useSelector(getContacts);
  // const handleDelete = id => );
  return (
    <div>
      <h1>Contacts</h1>
      <ul>
        {contactsList.map(({ id, name, number }) => (
          <li key={id}>
            <p>
              {name} {number}
            </p>
            <button type="button" onClick={() => dispatch(deleteContact(id))}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
