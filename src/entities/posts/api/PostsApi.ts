import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PostsApiResponse } from '../model/types';
import { IPost } from '@/shared/interfaces';

const BASE_URL = import.meta.env.VITE_POSTS_BASE_API_URL;
export const postsApi = createApi({
  reducerPath: 'PostsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getPosts: builder.query<PostsApiResponse, null>({
      query: () => '/posts',
    }),
    getProfilePost: builder.query<IPost, string>({
      query: (userId) => `/posts/${userId}`,
    }),
  }),
});

export const { useGetPostsQuery, useGetProfilePostQuery } = postsApi;
