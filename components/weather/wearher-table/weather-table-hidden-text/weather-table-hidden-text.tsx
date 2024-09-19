import { FilterDataType } from '../weather-table';
import { HourlyType } from '@/types/weather/hourly';

/**
 * 웹접근성을 위해 날씨 차트의 온도를 대체 텍스트로 나타낸 컴포넌트 입니다.
 */
export default function WeatherTableHiddenText({ filterData }: FilterDataType) {
  return filterData.map((item: HourlyType) => (
    <th key={item.dt} className="text-center py-1">
      <span className="absolute hid">{Math.round(item.temp)}도</span>
    </th>
  ));
}
