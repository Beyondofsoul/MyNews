import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { rootReducer } from './appReducer';
import { postsApi } from '@/entities/posts/api/PostsApi';
import { weatherApi } from '@/entities/weather/api/weatherApi';
import { currencyApi } from '@/entities/currency/api/CurrencyApi';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      postsApi.middleware,
      weatherApi.middleware,
      currencyApi.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
