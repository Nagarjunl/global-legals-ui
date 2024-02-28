// Need to use the React-specific entry point to import createApi
import { createApi } from '@reduxjs/toolkit/query/react'
import customFetchBase from './customFetchBase'

// Define a service using a base URL and expected endpoints
export const stripeApi = createApi({
  reducerPath: 'stripeApi',
  baseQuery: customFetchBase,
  tagTypes: ["Subscription"],
  endpoints: (builder) => ({
    findFromUser: builder.query({
      query: (id) => ({
          url: `/frontends/find-from-user/${id}`,
          method: "GET",
      }),
    }),
    getSubscriptions: builder.query({
      query: (userId) => ({
          url: `/frontends/getsubscriptions/${userId}`,
          method: "GET",
      }),
      providesTags: ["Subscription"],
    }),
    getProduct: builder.query({
      query: () => ({
          url: '/frontends/getproduct',
          method: "GET",
      }),
    }), 
    getInvoices: builder.query({
      query: ({userId,limit,startingAfter,endingBefore}) => ({
        url: `/frontends/getinvoices/${userId}/${limit}/${startingAfter}/${endingBefore}`,
        method: "GET",
      }),
    }), 
    createSubscription: builder.mutation({
        query: (data) => ({
          url: '/frontends/createsubscription',
          method: "POST",
          body: data,
      }),
      invalidatesTags: ["Subscription"],
    }),
    cancelSubscription: builder.mutation({
        query: (data) => ({
        url: '/frontends/cancelsubscription',
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Subscription"],
    }),
    resumeSubscription: builder.mutation({
        query: (data) => ({
        url: '/frontends/resumesubscription',
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Subscription"],
    }),
  })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useCreateSubscriptionMutation,
  useCancelSubscriptionMutation,
  useResumeSubscriptionMutation,

  useFindFromUserQuery,
  useGetSubscriptionsQuery,
  useGetProductQuery,
  useGetInvoicesQuery,
  useGetInvoicesCountQuery,
} = stripeApi;