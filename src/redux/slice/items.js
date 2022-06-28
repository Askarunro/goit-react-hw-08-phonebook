import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState:{},
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
      authApi.endpoints.login.matchFulfilled,
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