import { useGetLocalQuery } from '@/hooks/queries/local';
import { useGetWeatherQuery } from '@/hooks/queries/weather';
import { Location, LocationType } from '@/types/local';
import { conversionWeatherCode } from '@/utils/conversion-weather-code';

export default function WeatherTableIcon({ location }: Location) {
  const { data, isLoading } = useGetWeatherQuery(location.lat, location.lng);
  if (isLoading) return <td colSpan={5}>로딩중</td>;
  return data.hourly.slice(0, 5).map((item: any) => (
    <td key={item.dt} className="py-1">
      <div className="m-auto w-[60px] h-[60px]">{conversionWeatherCode(item.weather[0].id)}</div>
    </td>
  ));
}
