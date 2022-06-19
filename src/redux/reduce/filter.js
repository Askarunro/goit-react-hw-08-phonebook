import { createAction, createReducer} from "@reduxjs/toolkit";

export const searchContact = createAction("filter/searchContact");
export const filterReducer = createReducer("", {
  [searchContact]: (state, action) => (state = action.payload),
});