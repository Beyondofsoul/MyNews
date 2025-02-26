export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export interface IForm {
  name: string;
  password: number;
}
export interface IWeatherLocation {
  name: string;
}
export interface IWeatherCurrent {
  temp_c: number;
  condition: IWeatherCondition;
}
interface IWeatherCondition {
  icon: string;
  text: string;
}
export interface Weather {
  location: IWeatherLocation;
  current: IWeatherCurrent;
  condition: IWeatherCondition;
}
export interface CurrencyRates {
  [currencyCode: string]: number;
}
