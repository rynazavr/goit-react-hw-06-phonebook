import { combineReducers } from "redux";
import { items, filter } from "./changeContactReducer";

export default combineReducers({
  items,
  filter,
});
