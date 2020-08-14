import { INPUT_CHANGE, INPUT_RESET } from "../constants/contactListConstant";
import { createAction } from "@reduxjs/toolkit";

export const inputHandler = createAction(INPUT_CHANGE, ({ target }) => ({
  payload: target.value,
}));
export const inputReset = createAction(INPUT_RESET);

// export const inputHandler = (e) => ({
//   type: INPUT_CHANGE,
//   payload: e.target.value,
// });

// export const inputReset = () => ({
//   type: INPUT_RESET,
// });
