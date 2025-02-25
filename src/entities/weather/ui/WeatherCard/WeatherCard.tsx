import { IWeatherCurrent, IWeatherLocation } from '@/shared/interfaces';
import styles from './styles.module.css';
interface Props {
  current: IWeatherCurrent;
  location: IWeatherLocation;
}

function WeatherCard({ current, location }: Props) {
  return (
    <div className={styles.card}>
      <h1 className={styles.city}>{location.name}</h1>
      <p className={styles.temp}>Temp: {current.temp_c}</p>
      <p className={styles.text}>{current.condition.text}</p>
      <img src={current.condition.icon} alt="icon" className={styles.icon} />
    </div>
  );
}
export default WeatherCard;
