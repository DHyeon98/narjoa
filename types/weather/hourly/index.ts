export interface HourlyType {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: number;
  humidity: number;
  pop: number;
  pressure: number;
  temp: number;
  uvi: number;
  visibility: number;
  weather: WeatherItem[];
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
}

export interface WeatherItem {
  description: string;
  icon: string;
  id: number;
  main: string;
}
