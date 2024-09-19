import { conversionWeatherCode } from '@/utils/conversion-weather-code';
import { getDateFromTimestamp } from '@/utils/get-date';

export interface WeatherDateInformationType {
  informationData: {
    weatherId: number;
    date: number;
    maxTemp: number;
    minTemp: number;
  };
}

/**
 * 해당하는 날의 날씨와 최저, 최고 온도를 알 수 있는 컴포넌트 입니다.
 */
export default function WeatherDateInformation({ informationData }: WeatherDateInformationType) {
  const { weatherId, date, maxTemp, minTemp } = informationData;
  return (
    <div className="flex flex-col items-center gap-1">
      <p>{getDateFromTimestamp(date)}</p>
      <div className="w-12 h-12">{conversionWeatherCode(weatherId)}</div>
      <ul className="flex gap-[2px]">
        <li className="text-[#FF5A5A] font-bold">{Math.round(maxTemp)}</li>
        <li>/</li>
        <li className="text-[#2370FE] font-bold">{Math.round(minTemp)}</li>
      </ul>
    </div>
  );
}
