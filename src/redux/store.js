import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './api/contactsApi';
import { filterReducer } from "./reduce/filter";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});