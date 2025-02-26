import { CurrencyRates } from '@/shared/interfaces';

export interface CurrencyApiResponse {
  rates: CurrencyRates;
  status: string;
}
export interface ParamsType {
  from: string;
  to: string;
  amount: number;
}
