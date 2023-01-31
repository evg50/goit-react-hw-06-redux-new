import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = ' a';

const filterContactSlise = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setFilter } = filterContactSlise.actions;
export const filterContactsReducer = filterContactSlise.reducer;
