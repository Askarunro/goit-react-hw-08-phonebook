// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const contactsApi = createApi({
//   reducerPath: 'contacts',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://connections-api.herokuapp.com',
//     prepareHeaders: (headers, { getState }) => {
//       const token = getState().auth.token
//         if (token) {
//         headers.set('authorization', `Bearer ${token}`)
//       }
//       return headers},
//   }),
//   tagTypes: ['Contact'],
//   endpoints: builder => ({
//     getContacts: builder.query({
//       query: () => '/contacts',
//       providesTags: ['Contacts'],
//     }),
//     addContact: builder.mutation({
//       query: values => ({
//         url: '/contacts',
//         method: 'POST',
//         body: values,
//       }),
//       invalidatesTags: ['Contacts'],
//     }),
//     deleteContact: builder.mutation({
//       query: id => ({
//         url: `/contacts/${id}`,
//         method: 'DELETE',
//       }),
//       invalidatesTags: ['Contacts'],
//     }),
//     updateContact: builder.mutation({
//       query: id => ({
//         url: `/contacts/${id}`,
//         method: 'PATCH',
//       }),
//       invalidatesTags: ['Contacts'],
//     }),
//   }),
// });

// export const {
//   useGetContactsQuery,
//   useAddContactMutation,
//   useDeleteContactMutation,
//   useUpdateMaterialMutation,
// } = contactsApi;

import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios'

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params }) => {
    axios.interceptors.request.use(
      config => {
        config.headers['Authorization'] = `Bearer ${token}`;
            return config;
        },
        error => {
            return Promise.reject(error);
        }
    );
    const token = JSON.parse(localStorage.getItem('token'))|| "";

    try {
      const result = await axios({ url: baseUrl + url, method, data, params })
      return { data: result.data }
    } catch (axiosError) {
      let err = axiosError
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      }
    }
  }



export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
  }),
  endpoints(build) {

    return {
      getContacts: build.query({ query: () => ({ url: 'contacts', method: 'get' }) }),
      addContact: build.mutation({
        query: (values) => ({ url: 'contacts', method: 'post', data: values }),
      }),
      deleteContact: build.mutation({
        query: (id) => ({ url: `contacts/${id}`, method: 'delete' }),
      }),
      updateMaterial: build.mutation({
        query: (id) => ({ url: `contacts/${id}`, method: 'patch' }),
      }),
    }
  },
})
export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useUpdateMaterialMutation,
} = contactsApi;

// export default api