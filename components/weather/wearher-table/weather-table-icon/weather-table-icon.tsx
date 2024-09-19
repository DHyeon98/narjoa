import { conversionWeatherCode } from '@/utils/conversion-weather-code';
import { FilterDataType } from '../weather-table';
import { HourlyType } from '@/types/weather/hourly';

/**
 * 날씨 데이터의 날씨 코드를 아이콘으로 변환하는 컴포넌트 입니다.
 */
export default function WeatherTableIcon({ filterData }: FilterDataType) {
  return filterData.map((item: HourlyType) => (
    <td key={item.dt} className="py-1">
      <div className="m-auto w-[60px] h-[60px]">{conversionWeatherCode(item.weather[0].id)}</div>
    </td>
  ));
}
