import { createSlice, nanoid } from '@reduxjs/toolkit';
const PhoneInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactSlise = createSlice({
  name: 'contacts',
  initialState: PhoneInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        return [...state, action.payload];
      },
      prepare(fio, phone) {
        return {
          payload: {
            name: fio,
            number: phone,
            id: nanoid(),
          },
        };
      },
    },

    deleteContact: (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactSlise.actions;
export const contactsReducer = contactSlise.reducer;
