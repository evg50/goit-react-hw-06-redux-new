import { symbol } from 'prop-types';
import { combineReducers } from 'redux';
import { statusFilters } from './constants';

const tasksInitialState = [
  { id: 0, text: 'Learn HTML and CSS', completed: true },
  { id: 1, text: 'Get good at JavaScript', completed: true },
  { id: 2, text: 'Master React', completed: false },
  { id: 3, text: 'Discover Redux', completed: false },
  { id: 4, text: 'Build amazing apps', completed: false },
];

const PhoneInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsReducer = (state = PhoneInitialState, action) => {
  // console.log('start reducer');
  switch (action.type) {
    case 'contact/addContact':
      console.log('start add');

      return [...state, action.payload];
    case 'contact/deleteContact':
      console.log('delete contacts');
      return state.filter(contact => contact.id !== action.payload);
    default:
      // console.log('default contacts');
      return state;
  }
};
const filterInitialState = {
  filterValue: '',
};

const filterContacts = (state = filterInitialState, action) => {
  // console.log('start reducer2');

  switch (action.type) {
    case 'filter/empty':
      return state;
    case 'filter/NoEmpty':
      console.log(action.payload);
      return state;
    default:
      return state;
  }
};

const tasksReducer = (state = tasksInitialState, action) => {
  switch (action.type) {
    case 'tasks/addTask':
      console.log('addTask');
      return [...state, action.payload];
    case 'tasks/deleteTask':
      return state.filter(task => task.id !== action.payload);
    case 'tasks/toggleCompleted':
      return state.map(task => {
        if (task.id !== action.payload) {
          return task;
        }
        return { ...task, completed: !task.completed };
      });
    case 'tasks/toggleCompleted1':
      return state.map(task => {
        if (task.id !== action.payload) {
          return task;
        } //если таск не равен id из акшена то вставить его в новый массив
        return { ...task, completed: !task.completed }; // то которое мы нашли поменять у него свойство комплитед
      });
    default:
      // console.log('defaul task');
      return state;
  }
};

const filtersInitialState = {
  status: statusFilters.all,
};

const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case 'filters/setStatusFilter':
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
  contacts: contactsReducer,
  filterContacts: filterContacts,
});
