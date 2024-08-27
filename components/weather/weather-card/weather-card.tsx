import { useGetWeatherQuery } from '@/hooks/queries/weather';
import WeatherDateInformation from './weather-date-information/weather-date-information';
import WeatherTodayInformation from './weather-today-information/weather-today-information';
import { Location } from '@/types/local';

export default function WeatherCard({ location }: Location) {
  const { data, isLoading } = useGetWeatherQuery(location.lat, location.lng);
  if (isLoading) return <div>로딩중</div>;
  return (
    <div>
      <WeatherTodayInformation location={location} />
      <ul className="flex justify-between">
        {data.daily.slice(1, 6).map((dailyDate: any) => {
          const informationData = {
            weatherId: dailyDate.weather[0].id,
            date: dailyDate.dt,
            maxTemp: dailyDate.temp.max,
            minTemp: dailyDate.temp.min,
          };
          return (
            <li key={dailyDate.dt}>
              <WeatherDateInformation informationData={informationData} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
