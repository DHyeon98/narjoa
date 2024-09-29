import { useGetWeatherQuery } from '@/hooks/queries/weather';
import WeatherDateInformation from './weather-date-information/weather-date-information';
import WeatherTodayInformation from './weather-today-information/weather-today-information';
import { Location } from '@/types/local';
import { DailyType } from '@/types/weather/daily';

/**
 * 날씨 데이터를 시각적으로 보여주는 컴포넌트 입니다.
 */
export default function WeatherCard({ location }: Location) {
  const { data, isLoading } = useGetWeatherQuery(location.lat, location.lng);
  if (isLoading) return null;
  const { daily } = data;
  const { current } = data;

  return (
    <div className="flex flex-col gap-3">
      <WeatherTodayInformation daily={daily} current={current} />
      <ul className="flex justify-between gap-1">
        {/* 내일을 기준으로 총 5일의 날씨 데이터를 처리합니다. */}
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
