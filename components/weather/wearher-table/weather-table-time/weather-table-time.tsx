import { useGetWeatherQuery } from '@/hooks/queries/weather';
import { Location } from '@/types/local';
import { getHourFromTimestamp } from '@/utils/get-hour-from-timestamp';

export default function WeatherTableTime({ location }: Location) {
  const { data, isLoading } = useGetWeatherQuery(location.lat, location.lng);

  if (isLoading) return <td colSpan={5}>로딩중</td>;
  return data.hourly.slice(0, 5).map((item: any) => (
    <th key={item.dt} className="text-center py-1">
      {getHourFromTimestamp(item.dt)}시
    </th>
  ));
}
