import { Location } from '@/types/local';
import WeatherChart from '../weather-chart/weather-chart';
import WeatherTableIcon from './weather-table-icon/weather-table-icon';

export default function WeatherTable({ location }: Location) {
  return (
    <div>
      <WeatherTableIcon location={location} />
      <WeatherChart location={location} />
    </div>
  );
}
