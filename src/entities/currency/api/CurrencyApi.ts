import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CurrencyApiResponse, ParamsType } from '../model/types';

const BASE_URL = import.meta.env.VITE_CURRENCY_BASE_API_URL;
const API_KEY = import.meta.env.VITE_CURRENCY_API_KEY;
export const currencyApi = createApi({
  reducerPath: 'currencyApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getCurrency: builder.query<CurrencyApiResponse, null>({
      query: () => {
        return {
          url: '/latest',
          params: {
            access_key: API_KEY,
          },
        };
      },
    }),
    getCurrencyConvert: builder.query<CurrencyApiResponse, ParamsType>({
      query: (params) => {
        const { from = 'USD', to = 'RUB', amount = 5 } = params;
        return {
          url: '/convert',
          params: {
            access_key: API_KEY,
            from,
            to,
            amount,
          },
        };
      },
    }),
  }),
});

export const { useGetCurrencyQuery, useGetCurrencyConvertQuery } = currencyApi;
