// Need to use the React-specific entry point to import createApi
import { createApi } from '@reduxjs/toolkit/query/react'
import customFetchBase from './customFetchBase'

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: customFetchBase,
  endpoints: (builder) => ({
    createLawyer: builder.mutation({
      query: (data) => ({
        url: `/lawyers`,
        method: "POST",
        body: data ,
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useCreateLawyerMutation,
} = userApi