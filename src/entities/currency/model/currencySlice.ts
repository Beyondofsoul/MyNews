import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface State {
  selectedCurrencyFrom: string;
  selectedCurrencyTo: string;
  amount: number;
}

const initialState: State = {
  selectedCurrencyFrom: 'USD',
  selectedCurrencyTo: 'RUB',
  amount: 0,
};

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setCurrencyTo: (state, action: PayloadAction<string>) => {
      state.selectedCurrencyTo = action.payload;
    },
    setCurrencyFrom: (state, action: PayloadAction<string>) => {
      state.selectedCurrencyFrom = action.payload;
    },
    setAmount: (state, action: PayloadAction<number>) => {
      state.amount = action.payload;
    },
  },
});

export const { setCurrencyTo, setCurrencyFrom, setAmount } = currencySlice.actions;

export default currencySlice.reducer;
