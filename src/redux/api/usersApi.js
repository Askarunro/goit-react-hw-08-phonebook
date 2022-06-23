import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    // prepareHeaders: (headers, { getState }) => {
    //   const token = getState().auth.token
  
    //   // If we have a token set in state, let's assume that we should be passing it.
    //   if (token) {
    //     headers.set('authorization', `Bearer ${token}`)
    //   }
  
    //   return headers
    // },
  }),
  tagTypes: ['User'],
  endpoints: builder => ({
    registerUser: builder.mutation({
        query: values => ({
          url: '/users/signup',
          method: 'POST',
          body: values,
        }),
        invalidatesTags: ['Users'],
      }),
      loginUser: builder.mutation({
        query: values => ({
          url: '/users/login',
          method: 'POST',
          body: values,
        }),
        invalidatesTags: ['Users'],
      }),
      logoutUser: builder.mutation({
        query: values => ({
          url: '/users/logout',
          method: 'POST',
          body: values,
        }),
        invalidatesTags: ['Users'],
      }),
    getUsers: builder.query({
      query: () => '/users/current',
      providesTags: ['Users'],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
} = usersApi;


// import { createApi } from '@reduxjs/toolkit/query'
// import axios from 'axios'

// const axiosBaseQuery =
//   ({ baseUrl } = { baseUrl: '' }) =>
//   async ({ url, method, data, params }) => {
//     try {
//       const result = await axios({ url: baseUrl + url, method, data, params })
//       return { data: result.data }
//     } catch (axiosError) {
//       let err = axiosError
//       return {
//         error: {
//           status: err.response?.status,
//           data: err.response?.data || err.message,
//         },
//       }
//     }
//   }

// const api = createApi({
//   baseQuery: axiosBaseQuery({
//     baseUrl: 'https://connections-api.herokuapp.com',
//   }),
//   endpoints(build) {
//     return {
//       query: build.query({ query: () => ({ url: '/users/current', method: 'get' }) }),
//       mutation: build.mutation({
//         query: () => ({ url: '/users/login', method: 'post' }),
//         query: () => ({ url: `/users/logout`, method: 'post' }),
//         query: () => ({ url: `/users/signup`, method: 'post' }),


//       }),
//       // mutation: build.mutation({
//       //   query: () => ({ url: `/users/logout`, method: 'post' }),
//       // }),
//       // mutation: build.mutation({
//       //   query: () => ({ url: `/users/signup`, method: 'post' }),
//       // }),
//     }
//     // return {
//     //   query: build.query({ query: () => ({ url: '/contacts', method: 'get' }) }),
//     //   mutation: build.mutation({
//     //     query: () => ({ url: '/contacts', method: 'post' }),
//     //   }),
//     //   mutation: build.mutation({
//     //     query: (id) => ({ url: `/contacts/${id}`, method: 'post' }),
//     //   }),
//     //   mutation: build.mutation({
//     //     query: (id) => ({ url: `/contacts/${id}`, method: 'patch' }),
//     //   }),
//     // }
//   },
// })

// // export const {
// //   useGetUsersQuery,
// //   useRegisterUserMutation,
// //   useLoginUserMutation,
// //   useLogoutUserMutation,
// // } = axiosBaseQuery;

// export default api