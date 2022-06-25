import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './api/contactsApi';
import { usersApi } from './api/usersApi';
import { filterReducer, tokenReducer } from "./reduce/filter";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    token: tokenReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
    usersApi.middleware,
  ],
});