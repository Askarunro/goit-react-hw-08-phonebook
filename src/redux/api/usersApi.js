import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
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
} = contactsApi;