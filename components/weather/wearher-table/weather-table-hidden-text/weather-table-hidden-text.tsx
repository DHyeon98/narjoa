import { FilterDataType } from '../weather-table';
import { WeatherData } from '@/types/weather/hourly';

export default function WeatherTableHiddenText({ filterData }: FilterDataType) {
  return filterData.map((item: WeatherData) => (
    <th key={item.dt} className="text-center py-1">
      <span className="absolute hid">{Math.round(item.temp)}도</span>
    </th>
  ));
}
