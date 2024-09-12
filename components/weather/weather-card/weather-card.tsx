import { useGetWeatherQuery } from '@/hooks/queries/weather';
import WeatherDateInformation from './weather-date-information/weather-date-information';
import WeatherTodayInformation from './weather-today-information/weather-today-information';
import { Location } from '@/types/local';
import { DailyType } from '@/types/weather/daily';
import { Spinner } from '@/components/spinner/spinner';

export default function WeatherCard({ location }: Location) {
  const { data, isLoading } = useGetWeatherQuery(location.lat, location.lng);
  if (isLoading) return <Spinner />;
  return (
    <div className="flex flex-col gap-3">
      <WeatherTodayInformation location={location} />
      <ul className="flex justify-between gap-1">
        {data.daily.slice(1, 6).map((dailyDate: DailyType) => {
          const informationData = {
            weatherId: dailyDate.weather[0].id,
            date: dailyDate.dt,
            maxTemp: dailyDate.temp.max,
            minTemp: dailyDate.temp.min,
          };
          return (
            <li className="w-1/5 shadow py-1" key={dailyDate.dt}>
              <WeatherDateInformation informationData={informationData} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
