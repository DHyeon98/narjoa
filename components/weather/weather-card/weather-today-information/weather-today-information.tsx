import { conversionWeatherCode } from '@/utils/conversion-weather-code';
import { getDateFromTimestamp } from '@/utils/get-date';
import { WeatherDateInformationType } from '../weather-date-information/weather-date-information';
import { Location } from '@/types/local';
import { useGetWeatherQuery } from '@/hooks/queries/weather';

export default function WeatherTodayInformation({ location }: Location) {
  const { data } = useGetWeatherQuery(location.lat, location.lng);
  const { daily } = data;
  const { current } = data;
  const expectRain = daily[0].rain ? daily[0].rain : 0;
  return (
    <div>
      <div className="flex items-center gap-3">
        <div className="w-24 h-24">{conversionWeatherCode(current.weather[0].id)}</div>
        <ul>
          <li>
            <p className="font-Pretendard font-bold text-4xl">{Math.round(current.temp)}°</p>
          </li>
          <li className="flex gap-2 text-sm">
            <ul className="flex gap-[2px]">
              <li className="text-[#FF5A5A] font-bold">
                <p>{Math.round(daily[0].temp.max)}°</p>
              </li>
              <li>/</li>
              <li className="text-[#2370FE] font-bold">
                <p>{Math.round(daily[0].temp.min)}°</p>
              </li>
            </ul>
            <p>
              체감온도 <strong>{Math.round(current.feels_like)}°</strong>
            </p>
          </li>
          <li>
            <p className="text-sm">
              예상 강수량 <strong className="text-[#64B6EC]">{expectRain}mm</strong>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
