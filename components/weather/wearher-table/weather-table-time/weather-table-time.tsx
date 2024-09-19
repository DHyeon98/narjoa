import { HourlyType } from '@/types/weather/hourly';
import { getHourFromTimestamp } from '@/utils/get-hour-from-timestamp';
import { FilterDataType } from '../weather-table';

/**
 * 날씨 데이터의 timestamp에서 시간을 반환하는 컴포넌트 입니다.
 */
export default function WeatherTableTime({ filterData }: FilterDataType) {
  return filterData.map((item: HourlyType) => (
    <th key={item.dt} className="text-center py-1">
      {getHourFromTimestamp(item.dt)}시
    </th>
  ));
}
