import { useAppSelector } from '@/app/appStore';
import { useGetWeatherQuery } from '@/entities/weather/api/weatherApi';
import { WeatherBlock } from '@/widgets/weather';

function WeatherInfo() {
  const city = useAppSelector((state) => state.weather.city);
  const { data, isLoading, error } = useGetWeatherQuery({ q: city });

  return <>{isLoading ? <div>Загрузка</div> : <WeatherBlock weather={data} error={error} />}</>;
}
export default WeatherInfo;
