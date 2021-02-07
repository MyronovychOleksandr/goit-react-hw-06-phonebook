import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const addContacts = createAction("ph/add", (user) => ({
  payload: {
    contact: {
      id: uuidv4(),
      ...user,
    },
  },
}));

const removeContact = createAction("ph/remove");

const filterContact = createAction("ph/filter");

export default {
  addContacts,
  removeContact,
  filterContact,
};
