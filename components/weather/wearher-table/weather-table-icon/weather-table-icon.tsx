import { useGetLocalQuery } from '@/hooks/queries/local';
import { useGetWeatherQuery } from '@/hooks/queries/weather';
import { Location, LocationType } from '@/types/local';
import { conversionWeatherCode } from '@/utils/conversion-weather-code';

export default function WeatherTableIcon({ location }: Location) {
  const { data, isLoading } = useGetWeatherQuery(location.lat, location.lng);
  if (isLoading) return <div>로딩중</div>;
  return (
    <ul className="flex justify-between px-1">
      {data.hourly.slice(0, 5).map((item: any) => {
        return (
          <li key={item.dt}>
            <div className="w-[60px] h-[60px]">{conversionWeatherCode(item.weather[0].id)}</div>
          </li>
        );
      })}
    </ul>
  );
}
