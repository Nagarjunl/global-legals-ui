// Need to use the React-specific entry point to import createApi
import { createApi } from '@reduxjs/toolkit/query/react'
import customFetchBase from './customFetchBase'

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: customFetchBase,
  endpoints: (builder) => ({
    sendOtp: builder.mutation({
      query: (email) => ({
        url: `authentication/send-otp`,
        method: "POST",
        body: { email },
      }),
    }),
    verifyOtp: builder.mutation({
      query: (payload) => ({
        url: 'authentication/validate-otp',
        method: "POST",
        body: payload,
      }),
    }),
    setPassword: builder.mutation({
      query: (payload) => ({
        url: 'authentication/profession-sign-up',
        method: "POST",
        body: payload,
      }),
    }),
    forgotPassword: builder.mutation({
      query: (payload) => ({
        url: 'authentication/forgot-password',
        method: "POST",
        body: payload,
      }),
    }),
    validateResetLink: builder.query({
        query: ({email,token}) => ({
          url: `authentication/validate-link/${email}/${token}`,
          method: "GET",
      }),
    }),
    changePassword: builder.mutation({
      query: (payload) => ({
        url: 'authentication/change-password',
        method: "POST",
        body: payload,
      }),
    }),
    professionSignIn: builder.mutation({
      query: (payload) => ({
        url: 'authentication/profession-sign-in',
        method: "POST",
        body: payload,
      }),
    }),
    adminSignIn: builder.mutation({
      query: (payload) => ({
        url: 'authentication/admin-sign-in',
        method: "POST",
        body: payload,
      }),
    }),
    updateAdminPassword: builder.mutation({
      query: (payload) => ({
        url: 'admin/update-admin-password',
        method: "PATCH",
        body: payload,
      }),
    }),
    updateAdminDetail: builder.mutation({
      query: ( data) => ({
        url: `admin/update-admin-detail`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useSendOtpMutation,
  useVerifyOtpMutation,
  useSetPasswordMutation,
  useForgotPasswordMutation,
  useChangePasswordMutation,
  useProfessionSignInMutation,
  useAdminSignInMutation,
  useUpdateAdminPasswordMutation,
  useUpdateAdminDetailMutation,

  useLazyValidateResetLinkQuery,
} = authApi