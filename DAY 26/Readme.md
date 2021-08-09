Day 26
THA
React : - 6 Redux : - more than 6 files

https://cs536.csb.app/


Basics
useReducer Hook ?

Examples https://stackblitz.com/edit/usereducer-examples-must



Explain Redux Working
install redux react-redux npm i redux react-redux
create folder structure


Plan
store

import { createStore } from 'redux';

// it takes reducer function as an parameter
const store = createStore();

create state

State
let initialState = {
  firstName: '',
  lastName: '',
};

action types

updateFirstName = 'updateFirstName';
updateLastName = 'updateFirstName';

action creators

// firstName updater
const updateFirstNameInput = (input) => {
  return {
    type: updateFistName,
    payload: input,
  };
};

// lastName updater
const updateLastName = (input) => {
  return {
    type: updateLastName,
    payload: input,
  };
};

reducer

case updateFirstName:
    firstName: "Do something"

case updateLastName:
    lastName: "do Somethignwith last name "

import reducer in store...

we need to provide redux store to its child



redux