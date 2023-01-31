import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { deleteContact } from '../redux/action';
import { deleteContact } from '../redux/contactSlise';
import { getContacts, getFilterValue } from '../redux/selectors';

// import ContactItem from './ContactItem';

const getVisibleContacts = (constacts, filterValue) => {
  return constacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );
};

export default function PhoneBook() {
  const dispatch = useDispatch();
  const contactsList = useSelector(getContacts);
  const filterValue = useSelector(getFilterValue);
  // console.log('filterValue=', filterValue);
  const visibleContacts = getVisibleContacts(contactsList, filterValue);
  console.log('visibleContacts=', visibleContacts);
  // console.log(contactsList);
  // const handleDelete = id => );
  return (
    <div>
      <h1>Contacts</h1>
      <ul>
        {visibleContacts.map(({ id, name, number }) => (
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
