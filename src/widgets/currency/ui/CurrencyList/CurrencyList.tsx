import { CurrencyCard } from '@/entities/currency';
import styles from './styles.module.css';

import { Calculator } from '@/features/calculator';
import { CurrencyRates } from '@/shared/interfaces';

interface Props {
  isLoading: boolean;
  currencies: CurrencyRates;
}

function CurrencyList({ currencies, isLoading }: Props) {
  if (isLoading) {
    return 'Loading';
  }

  return (
    <>
      <Calculator currencies={currencies} />
      <ul className={styles.list}>
        <CurrencyCard currencies={currencies} />
      </ul>
    </>
  );
}
export default CurrencyList;
