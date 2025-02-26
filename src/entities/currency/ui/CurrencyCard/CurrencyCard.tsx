import { CurrencyRates } from '@/shared/interfaces';
import styles from './styles.module.css';

interface Props {
  currencies: CurrencyRates;
}

function CurrencyCard({ currencies }: Props) {
  return (
    <>
      <h3>EUR MAIN CURRENCY</h3>
      <li className={styles.card}>
        <h1>{currencies.USD.toFixed(2)} USD</h1>
        <h1>{currencies.GBP.toFixed(2)} GBP</h1>
        <h1>{currencies.RUB.toFixed(2)} RUB</h1>
      </li>
    </>
  );
}
export default CurrencyCard;
