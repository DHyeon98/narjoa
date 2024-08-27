import { conversionWeatherCode } from '@/utils/conversion-weather-code';
import { getDateFromTimestamp } from '@/utils/get-date';
import { WeatherDateInformationType } from '../weather-date-information/weather-date-information';
import { Location } from '@/types/local';
import { useGetWeatherQuery } from '@/hooks/queries/weather';

export default function WeatherTodayInformation({ location }: Location) {
  const { data } = useGetWeatherQuery(location.lat, location.lng);
  const { daily } = data;
  const { current } = data;
  return (
    <div>
      <div className="flex items-center gap-3">
        <div className="w-24 h-24">{conversionWeatherCode(current.weather[0].id)}</div>
        <ul>
          <li>
            <p className="font-Pretendard text-3xl">{Math.round(current.temp)}°</p>
          </li>
          <li className="flex gap-2">
            <ul className="flex gap-[2px]">
              <li>{Math.round(daily[0].temp.max)}°</li>
              <li>/</li>
              <li>{Math.round(daily[0].temp.min)}°</li>
            </ul>
            <p>체감온도 {Math.round(current.feels_like)}°</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
