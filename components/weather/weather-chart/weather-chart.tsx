import { useGetWeatherQuery, weatherType } from '@/hooks/queries/weather';
import LineRechart from '../../line-rechart/line-rechart';
import { getHourFromTimestamp } from '@/utils/get-hour-from-timestamp';
import { Location } from '@/types/local';

export default function WeatherChart({ location }: Location) {
  const { data, isLoading } = useGetWeatherQuery(location.lat, location.lng);
  const filterData =
    !isLoading &&
    data.hourly.slice(0, 5).map((item: any) => ({
      fcstTime: `${getHourFromTimestamp(item.dt)}시`,
      fcstValue: Math.round(item.temp),
    }));

  if (isLoading) return <div>로딩</div>;
  return <LineRechart chartData={filterData} />;
}
