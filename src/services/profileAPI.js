// Need to use the React-specific entry point to import createApi
import { createApi } from '@reduxjs/toolkit/query/react'
import customFetchBase from './customFetchBase'

// Define a service using a base URL and expected endpoints
export const profileApi = createApi({
  reducerPath: 'profileApi',
  baseQuery: customFetchBase,
  endpoints: (builder) => ({
    getProfileDayCount: builder.query({
        query: (userId) => ({
          url: `/frontends/getprofiledaycount/${userId}`,
          method: "GET",
      }),
    }),
    getProfileWeekCount: builder.query({
        query: (userId) => ({
          url: `/frontends/getprofileweekcount/${userId}`,
          method: "GET",
      }),
    }),
    getProfileMonthCount: builder.query({
        query: (userId) => ({
          url: `/frontends/getprofilemonthcount/${userId}`,
          method: "GET",
      }),
    }),
    getLastThreeMonths: builder.query({
        query: (userId) => ({
          url: `/frontends/getlastthreemonths/${userId}`,
          method: "GET",
      }),
    }),
    getChartData: builder.query({
        query: (userId) => ({
          url: `/frontends/getchartdata/${userId}`,
          method: "GET",
      }),
    }),
    getProfileViewCount:  builder.query({
      query: ({userId,limit,offset,startDate, endDate,profession}) => ({
        url: `/frontends/getprofileviewcount/${userId}/${limit}/${offset}/${startDate}/${endDate}/${profession}`,
        method: "GET",
      }),
    }),
    newEnrollReport:  builder.query({
      query: ({limit,offset,startDate, endDate,profession}) => ({
        url: `/frontends/newenrollreport/${limit}/${offset}/${startDate}/${endDate}/${profession}`,
        method: "GET",
      }),
    }),
  })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useGetProfileDayCountQuery,
    useGetProfileWeekCountQuery,
    useGetProfileMonthCountQuery,
    useGetLastThreeMonthsQuery,
    useGetChartDataQuery,
    useGetProfileViewCountQuery,
    useLazyGetProfileViewCountQuery,
    useLazyNewEnrollReportQuery,
    } = profileApi;