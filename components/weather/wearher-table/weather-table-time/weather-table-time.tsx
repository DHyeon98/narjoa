import { weatherType } from '@/hooks/queries/weather';
import { WeatherData } from '@/types/weather/hourly';
import { getHourFromTimestamp } from '@/utils/get-hour-from-timestamp';
import { FilterDataType } from '../weather-table';

export default function WeatherTableTime({ filterData }: FilterDataType) {
  return filterData.map((item: WeatherData) => (
    <th key={item.dt} className="text-center py-1">
      {getHourFromTimestamp(item.dt)}시
    </th>
  ));
}
