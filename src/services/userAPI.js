// Need to use the React-specific entry point to import createApi
import { createApi } from '@reduxjs/toolkit/query/react'
import customFetchBase from './customFetchBase'

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: customFetchBase,
  tagTypes: ["Member","Verify"],
  endpoints: (builder) => ({
    createMembers: builder.mutation({
        query: (data) => ({
          url: `/members`,
          method: "POST",
          body: data,
      }),
      invalidatesTags: ["Member"],
    }),
    updateMember: builder.mutation({
        query: (data) => ({
          url: `/members/${data.id}`,
          method: "PATCH",
          body: data,
      }),
      invalidatesTags: ["Member"],
    }),
    getMember: builder.query({
        query: (id) => ({
          url: `/frontends/find-member/${id}`,
          method: "GET",
      }),
      providesTags: ["Member"],
    }),
    getMemberFromSuperId: builder.query({
        query: (id) => ({
          url: `/members/findUsingSuperId/${id}`,
          method: "GET",
      }),
      providesTags: ["Member"],
    }),
    getMembers: builder.query({
        query: () => ({
          url: `/members`,
          method: "GET",
      }),
      providesTags: ["Member"],
    }),
    searchMembers: builder.query({
     query: (id) => ({
        url: `/frontends/search-members/${id}`,
        method: "GET",
      }),
    }),
    unverifiedUser: builder.query({
        query: () => ({
          url: `/frontends/unverified`,
          method: "GET",
      }),
      providesTags: ["Verify"],
    }),
    verifyUser: builder.mutation({
        query: (data) => ({
          url: `/frontends/verifyUser/${data.id}`,
          method: "PATCH",
          body: data,
      }),
      invalidatesTags: ["Verify"],
    }),
    profileEmail: builder.mutation({
        query: (data) => ({
          url: `/frontends/profileEmail`,
          method: "POST",
          body: data,
      }),
    }),
    makePayment: builder.mutation({
        query: (data) => ({
          url: `/frontends/makePayment`,
          method: "POST",
          body: data,
      }),
    }),
    captchaVerify: builder.mutation({
        query: (data) => ({
          url: `/frontends/captchaVerify/${data}`,
          method: "POST",
      }),
    }),
    paymentIntentApi: builder.mutation({
        query: (data) => ({
          url: '/frontends/paymentIntent',
          method: "POST",
          body: {amount: data},
      }),
    }),
  })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useVerifyUserMutation,
  useUpdateMemberMutation,
  useCreateMembersMutation,
  useProfileEmailMutation,
  useMakePaymentMutation,
  useCaptchaVerifyMutation,
  usePaymentIntentApiMutation,

  useGetMembersQuery,
  useGetMemberQuery,
  useGetMemberFromSuperIdQuery,
  useSearchMembersQuery,
  useUnverifiedUserQuery,
} = userApi;