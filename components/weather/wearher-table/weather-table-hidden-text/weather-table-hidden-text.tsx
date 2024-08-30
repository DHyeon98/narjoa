import { useGetWeatherQuery } from '@/hooks/queries/weather';
import { Location } from '@/types/local';

export default function WeatherTableHiddenText({ location }: Location) {
  const { data, isLoading } = useGetWeatherQuery(location.lat, location.lng);
  console.log(data);
  return data.hou;
}
