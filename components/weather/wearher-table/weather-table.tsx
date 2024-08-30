import { Location } from '@/types/local';
import WeatherChart from '../weather-chart/weather-chart';
import WeatherTableIcon from './weather-table-icon/weather-table-icon';
import WeatherTableTime from './weather-table-time/weather-table-time';
import { useGetWeatherQuery } from '@/hooks/queries/weather';

export default function WeatherTable({ location }: Location) {
  const { data, isLoading } = useGetWeatherQuery(location.lat, location.lng);
  const filterData = !isLoading && data.hourly.slice(0, 5);
  console.log(filterData);
  return (
    <div className="relative h-full">
      <table className="w-full h-full border-collapse">
        <colgroup>
          <col className="w-14 bg-slate-100 font-medium" />
        </colgroup>
        <thead>
          <tr>
            <th>시간</th>
            <WeatherTableTime location={location} />
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>날씨</th>
            <WeatherTableIcon location={location} />
          </tr>
          <tr>
            <th className=" h-full">기온</th>
            <td colSpan={5}></td>
          </tr>
        </tbody>
      </table>
      <WeatherChart location={location} />
    </div>
  );
}
