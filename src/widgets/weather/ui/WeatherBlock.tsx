import { useAppDispatch } from '@/app/appStore';
import { WeatherCard } from '@/entities/weather';
import { setCity } from '@/entities/weather/model/weatherSlice';
import { Search } from '@/features/search';
import { Weather } from '@/shared/interfaces';
import styles from './styles.module.css';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';

interface Props {
  weather?: Weather;
  error?: FetchBaseQueryError | SerializedError | null | undefined;
}

function WeatherBlock({ weather, error }: Props) {
  const dispatch = useAppDispatch();
  const getHistory = (): string[] => {
    const history = localStorage.getItem('weatherHistory');
    return history ? JSON.parse(history) : [];
  };
  const saveHistory = (city: string) => {
    let history = getHistory();
    history = [city, ...history.filter((item) => item !== city)];
    history = history.slice(0, 5);
    localStorage.setItem('weatherHistory', JSON.stringify(history));
  };

  if (!weather) {
    return <div>Error</div>;
  }
  if (error) {
    if ('status' in error && error.status === 400) {
      alert('Город не найден. Попробуйте ещё раз.');
    } else {
      alert('Ошибка. Попробуйте ещё раз.');
    }
  }
  return (
    <div className={styles.section}>
      <Search setKeywords={(keywords) => dispatch(setCity(keywords))} addToHistory={saveHistory} />
      <WeatherCard location={weather.location} current={weather.current} />
      <ul>
        <h3>История Поиска:</h3>
        {getHistory().map((city, index) => (
          <li key={index} onClick={() => dispatch(setCity(city))} className={styles.history}>
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default WeatherBlock;
