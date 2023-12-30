import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase";

export const fileUploadApi = createApi({
  reducerPath: "fileUploadApi",
  baseQuery: customFetchBase,
  endpoints: (build) => ({
    postFile: build.mutation({
      query: (file) => ({
        url: "/upload",
        method: "POST",
        body: file,
      }),
    }),
    deleteFile: build.mutation({
      query: (filename) => ({
        url: "/deleteFile",
        method: "DELETE",
        body: { filename: filename },
      }),
    }),
  }),
});

export const { usePostFileMutation, useDeleteFileMutation } = fileUploadApi;
