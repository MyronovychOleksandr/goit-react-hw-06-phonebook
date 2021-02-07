import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import phActions from "./phonebookActions";

const addContact = (state, action) => {
  return [...state, action.payload.contact];
};

const removeContact = (state, action) => {
  return state.filter((contact) => contact.id !== action.payload);
};

const contacts = createReducer([], {
  [phActions.addContacts]: addContact,
  [phActions.removeContact]: removeContact,
});

const filter = createReducer("", {
  [phActions.filterContact]: (state, action) => action.payload,
});

export default combineReducers({
  contacts,
  filter,
});
