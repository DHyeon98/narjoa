import { getDateFromTimestamp } from '@/utils/get-date';

interface WeatherDateInformationType {
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
      <ul className="flex">
        <li>{Math.round(maxTemp)}</li>
        <li>/</li>
        <li>{Math.round(minTemp)}</li>
      </ul>
    </div>
  );
}
