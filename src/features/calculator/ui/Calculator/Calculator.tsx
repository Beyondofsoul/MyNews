import styles from './styles.module.css';
import { CurrencyRates } from '@/shared/interfaces';
import { useAppDispatch } from '@/app/appStore';
import { setAmount, setCurrencyFrom, setCurrencyTo } from '@/entities/currency/model/currencySlice';

interface Props {
  currencies: CurrencyRates;
}

function Calculator({ currencies }: Props) {
  const dispatch = useAppDispatch();

  const currenciesKeys = Object.keys(currencies);

  return (
    <div className={styles.calc}>
      NOT WORK API
      <input
        type="number"
        placeholder="Введите сумму"
        className={styles.input}
        onChange={(e) => dispatch(setAmount(Number(e.target.value)))}
      />
      <div className={styles.selects}>
        <select
          className={styles.select}
          onChange={(e) => dispatch(setCurrencyFrom(e.target.value))}
        >
          {currenciesKeys.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <button className={styles.button}>Рассчитать</button>
        <select className={styles.select} onChange={(e) => dispatch(setCurrencyTo(e.target.value))}>
          {currenciesKeys.map((currency) => (
            <option value={currency} key={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
export default Calculator;
