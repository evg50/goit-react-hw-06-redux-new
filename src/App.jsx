import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import FormInputHooks from './components/FormInputHooks';
import PhoneBook from './components/PhoneBook';
import Filter from './components/Filter';
import { TaskList } from 'components/TaskList/TaskList';
import { TaskForm } from 'components/TaskForm/TaskForm';

//Телефонная книга

export default function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');
  const [filter, setFilter] = useState('');

  const formSubmit = (name, number) => {
    console.log(name, 'this name');
    console.log(number, 'this number');

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(s => [...s, newContact]);
  };
  // const deleteContact = (e) => {
  // 	setContacts(contacts.filter((contact) => contact.id !== e))
  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };
  function getVisibleContacts() {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  const visibleContacts = getVisibleContacts();

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  return (
    <div>
      <h1>PhoneBook</h1>
      <FormInputHooks onSubmit={formSubmit} />
      <Filter />
      <PhoneBook
        contactsList={visibleContacts}
        onDeleteContact={deleteContact}
      />
      {/* <TaskForm />  */}
      {/* <TaskList /> */}
    </div>
  );
}
