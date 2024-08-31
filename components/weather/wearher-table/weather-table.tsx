import { Location } from '@/types/local';
import WeatherChart from '../weather-chart/weather-chart';
import WeatherTableIcon from './weather-table-icon/weather-table-icon';
import WeatherTableTime from './weather-table-time/weather-table-time';
import { useGetWeatherQuery } from '@/hooks/queries/weather';
import { HourlyType } from '@/types/weather/hourly';
import WeatherTableHiddenText from './weather-table-hidden-text/weather-table-hidden-text';

export interface FilterDataType {
  filterData: HourlyType[];
}

export default function WeatherTable({ location }: Location) {
  const { data, isLoading } = useGetWeatherQuery(location.lat, location.lng);
  const filterData = !isLoading && data.hourly.slice(0, 5);

  if (isLoading) return <div>로딩중</div>;
  return (
    <div className="relative h-full">
      <table className="w-full h-full border-collapse">
        <caption className="hid border-none border-0">
          이 표는 현재 시각으로부터 1시간씩 총 5시간의 시간, 날씨, 기온에 대한 정보가 담겨있습니다.
        </caption>
        <colgroup>
          <col className="w-14 bg-slate-100 font-medium" />
        </colgroup>
        <thead>
          <tr>
            <th>시간</th>
            <WeatherTableTime filterData={filterData} />
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>날씨</th>
            <WeatherTableIcon filterData={filterData} />
          </tr>
          <tr>
            <th className="lg:h-full h-32">기온</th>
            <WeatherTableHiddenText filterData={filterData} />
          </tr>
        </tbody>
      </table>
      <WeatherChart filterData={filterData} />
    </div>
  );
}
