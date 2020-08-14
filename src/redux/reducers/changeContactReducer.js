import { createReducer } from "@reduxjs/toolkit";
import {
  addContact,
  deleteContact,
  contactStorage,
  handleFilter,
} from "../actions/changeContactAction";

export const items = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
  [contactStorage]: (state, { payload }) => payload,
});

export const filter = createReducer("", {
  [handleFilter]: (state, { payload }) => (state = payload),
});
