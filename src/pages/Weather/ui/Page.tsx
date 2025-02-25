import styles from './styles.module.css';
import WeatherInfo from './WeatherInfo/WeatherInfo';

function WeatherPage() {
  return (
    <main className={styles.main}>
      <WeatherInfo />
    </main>
  );
}

export default WeatherPage;
