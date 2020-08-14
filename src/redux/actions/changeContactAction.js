import { createAction } from "@reduxjs/toolkit";
import shortid from "shortid";
import {
  ADD_CONTACT,
  REMOVE_CONTACT,
  CONTACT_STORAGE,
  CONTACT_FILTER,
} from "../constants/contactListConstant.js";

export const addContact = createAction(ADD_CONTACT, (name, number) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));
export const deleteContact = createAction(REMOVE_CONTACT);
export const contactStorage = createAction(CONTACT_STORAGE);
export const handleFilter = createAction(CONTACT_FILTER, ({ target }) => ({
  payload: target.value,
}));
