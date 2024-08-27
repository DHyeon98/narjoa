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

export default function WeatherDateInformation({ informationData }: WeatherDateInformationType) {
  const { weatherId, date, maxTemp, minTemp } = informationData;
  return (
    <div className="flex flex-col items-center">
      <p>{getDateFromTimestamp(date)}</p>
      <div className="w-12 h-12">{conversionWeatherCode(weatherId)}</div>
      <ul className="flex">
        <li>{Math.round(maxTemp)}</li>
        <li>/</li>
        <li>{Math.round(minTemp)}</li>
      </ul>
    </div>
  );
}
