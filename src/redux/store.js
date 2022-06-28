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





// import { configureStore } from "@reduxjs/toolkit";
// import storage from "redux-persist/lib/storage";
// import { contactsApi } from './api/contactsApi';
// import { usersApi } from './api/usersApi';
// import { filterReducer} from "./reduce/filter";
// import { tokenReducer } from "./slice/items";
// import {authSlice } from './slice/items'

// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";

// const persistConfig = {
//   key: "auth",
//   storage,
//   whitelist: ['token'],
// };

// // const persistedReducer = persistReducer(persistConfig, tokenReducer);
// const persistedReducer = persistReducer(persistConfig, authSlice.reducer);


// export const store = configureStore({
//   reducer: {
//     token: persistedReducer,
//     filter: filterReducer,
//     [contactsApi.reducerPath]: contactsApi.reducer,
//     [usersApi.reducerPath]: usersApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>[
//     ...getDefaultMiddleware(
//       {serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       }}),
//     contactsApi.middleware,
//     usersApi.middleware,
//     ]
// });

// export const persistor = persistStore(store);