import { createReducer } from "@reduxjs/toolkit";
import { inputHandler, inputReset } from "../actions/formAction";
export const items = createReducer("", {
  [inputHandler]: (state, { payload }) => [...state, payload],
  [inputReset]: (state, { payload }) => [...state, ""],
});

// import { INPUT_CHANGE, INPUT_RESET } from "../constants/formConstants";

// const initialState = "";

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case INPUT_CHANGE:
//       return action.payload;

//     case INPUT_RESET:
//       return "";

//     default:
//       return state;
//   }
// };
