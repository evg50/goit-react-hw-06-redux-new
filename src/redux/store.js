// import { filtersReducer, tasksReducer } from './reducer';
import { filterContactsReducer } from './filterContactSlice';
import { contactsReducer } from './contactSlise';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filterContacts: filterContactsReducer,
  },
});
