import { nanoid } from 'nanoid';

export const addTask = text => {
  return {
    type: 'tasks/addTask',
    payload: {
      id: nanoid(),
      completed: false,
      text,
    },
  };
};

export const deleteTask = taskId => {
  return {
    type: 'tasks/deleteTask',
    payload: taskId,
  };
};

export const toggleCompleted = taskId => {
  return {
    type: 'tasks/toggleCompleted',
    payload: taskId,
  };
};

export const setFilter = value => {
  return {
    type: 'filters/setStatusFilter',
    payload: value,
  };
};

export const addContact = (fio, phone) => {
  // console.log('fio, phone', fio, phone); ok
  return {
    // type: 'contact/addContact',
    type: 'contact/addContact',
    payload: {
      id: nanoid(),
      name: fio,
      number: phone,
    },
  };
};

export const deleteContact = (id = 1) => {
  return {
    type: 'contact/deleteContact',
    payload: id,
  };
};
//comit aplly
