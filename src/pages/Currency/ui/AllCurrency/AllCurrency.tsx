import { useGetCurrencyQuery } from '@/entities/currency/api/CurrencyApi';
import { CurrencyList } from '@/widgets/currency';

function AllCurrency() {
  const { data: currencies, isLoading } = useGetCurrencyQuery(null);

  return <CurrencyList currencies={currencies?.rates ?? {}} isLoading={isLoading} />;
}
export default AllCurrency;
