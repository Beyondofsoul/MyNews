import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Weather } from '@/shared/interfaces';

const BASE_URL = import.meta.env.VITE_WEATHER_BASE_API_URL;
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getWeather: builder.query<Weather, { q: string }>({
      query: ({ q }) => {
        return {
          url: 'current.json',
          params: {
            key: API_KEY,
            q,
          },
        };
      },
    }),
  }),
});

export const { useGetWeatherQuery } = weatherApi;
