// import { createSlice } from '@reduxjs/toolkit'
// import { PayloadAction } from '@reduxjs/toolkit'
// import { User } from '..//api/usersApi'

// const slice = createSlice({
//   name: 'auth',
//   initialState: { user: null, token: null } ,
//   reducers: {
//     setCredentials: (
//       state,
//       { payload: { user, token } }
//     ) => {
//       state.user = user
//       state.token = token
//     },
//   },
// })


import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState:{
    user: { name: null, email: null },
    token: localStorage.getItem("token") || "",
  isLoggedIn: false,
  },
  initialState: {
    token: localStorage.getItem("token") || "",
  },
  reducers: {
    logout(state) {
      state.token = "";
    },
  },
  extraReducers: (build) => {
    console.log(build)
    build.addMatcher(
      // authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
      }
    );
  },
});

export const { logout } = authSlice.actions;






// import { createAction, createReducer} from "@reduxjs/toolkit";


// export const myToken = createAction("token/myToken");
// export const tokenReducer = createReducer(JSON.parse(localStorage.getItem('token')), {
//   [myToken]: (state, action) => (state = action.payload),
// });