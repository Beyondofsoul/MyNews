import { postsApi } from '@/entities/posts/api/PostsApi';
import { weatherApi } from '@/entities/weather/api/weatherApi';
import weatherReducer from '@/entities/weather/model/weatherSlice';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  weather: weatherReducer,
  [postsApi.reducerPath]: postsApi.reducer,
  [weatherApi.reducerPath]: weatherApi.reducer,
});
