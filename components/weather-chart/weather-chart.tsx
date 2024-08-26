import { useGetWeatherQuery, weatherType } from '@/hooks/queries/weather';
import LineRechart from '../line-rechart/line-rechart';
import { LocationType } from '@/pages';
import { getHour } from '@/utils/get-hour';

interface WeatherChartType {
  location: LocationType;
}

export default function WeatherChart({ location }: WeatherChartType) {
  const { data, isLoading } = useGetWeatherQuery(location.lat, location.lng);
  const filterData =
    !isLoading &&
    data.hourly.slice(0, 5).map((item: any) => ({
      fcstTime: `${getHour(item.dt)}시`,
      fcstValue: Math.round(item.temp),
    }));

  if (isLoading) return <div>로딩</div>;

  return <LineRechart chartData={filterData} />;
}
