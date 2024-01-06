// Need to use the React-specific entry point to import createApi
import { createApi } from '@reduxjs/toolkit/query/react'
import customFetchBase from './customFetchBase'

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: customFetchBase,
  tagTypes: ["Member"],
  endpoints: (builder) => ({
    createLawyer: builder.mutation({
      query: (data) => ({
        url: `/lawyers`,
        method: "POST",
        body: data,
      }),
    }),
    createBondBailsMan: builder.mutation({
      query: (data) => ({
        url: `/bondbailsmans`,
        method: "POST",
        body: data,
      }),
    }),
    createSecurity: builder.mutation({
        query: (data) => ({
          url: `/securities`,
          method: "POST",
          body: data,
        }),
    }),
    createPrivateInvestigators: builder.mutation({
        query: (data) => ({
          url: `/privateinvestigators`,
          method: "POST",
          body: data,
        }),
    }),
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
          url: `/members/${id}`,
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
     query: (data) => ({
        url: `/members/search-members?location=${data?.location}&people=${data?.people}&ratings=${data?.ratings}`,
        method: "GET",
      }),
    }),
    unverifiedUser: builder.query({
        query: () => ({
          url: `/authentication/unverified`,
          method: "GET",
      }),
      providesTags: ["Member"],
    }),
    verifyUser: builder.mutation({
        query: (data) => ({
          url: `/authentication/verifyUser/${data.id}`,
          method: "PATCH",
          body: data,
      }),
      invalidatesTags: ["Member"],
    }),
  })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useVerifyUserMutation,
  useCreateLawyerMutation,
  useCreateBondBailsManMutation,
  useCreatePrivateInvestigatorsMutation,
  useCreateSecurityMutation,
  useUpdateMemberMutation,
  useCreateMembersMutation,
  useGetMembersQuery,
  useGetMemberQuery,
  useGetMemberFromSuperIdQuery,
  useSearchMembersQuery,
  useUnverifiedUserQuery,
} = userApi;