import { createApi } from "@reduxjs/toolkit/query/react";
import axios from "axios";

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: "" }) =>
  async ({ url, method, data, params }) => {
    axios.interceptors.request.use(
      (config) => {
        config.headers["Authorization"] = `Bearer ${token}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    const token = JSON.parse(localStorage.getItem("token")) || "";

    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://connections-api.herokuapp.com/",
  }),
  endpoints(build) {
    return {
      getContacts: build.query({ query: () => ({ url: "contacts", method: "get" }) }),
      addContact: build.mutation({
        query: (values) => ({ url: "contacts", method: "post", data: values }),
      }),
      deleteContact: build.mutation({
        query: (id) => ({ url: `contacts/${id}`, method: "delete" }),
      }),
      updateMaterial: build.mutation({
        query: ({name, number, id}) => ({ url: `contacts/${id}`, method: "patch", data: {name, number} }),
      }),
    };
  },
});
export const { useGetContactsQuery, useAddContactMutation, useDeleteContactMutation, useUpdateMaterialMutation } = contactsApi;
