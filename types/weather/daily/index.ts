import { WeatherItem } from '../hourly';

export interface DailyType {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: FeelLickItem[];
  humidity: number;
  moon_phase: number;
  moonrise: number;
  moonset: number;
  pop: number;
  pressure: number;
  rain: number;
  summary: string;
  sunrise: number;
  sunset: number;
  temp: TempItem;
  uvi: number;
  weather: WeatherItem[];
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
}

export interface FeelLickItem {
  day: number;
  eve: number;
  morn: number;
  night: number;
}

export interface TempItem extends FeelLickItem {
  max: number;
  min: number;
}
