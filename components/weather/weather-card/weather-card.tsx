import { useGetWeatherQuery } from '@/hooks/queries/weather';
import { LocationType } from '@/pages';
import WeatherDateInformation from './weather-date-information/weather-date-information';
import { getCurrentDate } from '@/utils/get-current-date';

interface WeatherCardType {
  location: LocationType;
}
export default function WeatherCard({ location }: WeatherCardType) {
  const { data, isLoading } = useGetWeatherQuery(location.lat, location.lng);
  if (isLoading) return <div>로딩중</div>;
  return (
    <div>
      <h3>{getCurrentDate()}</h3>
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
