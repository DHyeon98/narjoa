import { useGetLocalQuery } from '@/hooks/queries/local';
import { useGetWeatherQuery } from '@/hooks/queries/weather';
import { Location, LocationType } from '@/types/local';
import { conversionWeatherCode } from '@/utils/conversion-weather-code';
import { FilterDataType } from '../weather-table';
import { WeatherData } from '@/types/weather/hourly';

export default function WeatherTableIcon({ filterData }: FilterDataType) {
  return filterData.map((item: WeatherData) => (
    <td key={item.dt} className="py-1">
      <div className="m-auto w-[60px] h-[60px]">{conversionWeatherCode(item.weather[0].id)}</div>
    </td>
  ));
}
