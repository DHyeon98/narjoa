import { useGetWeatherQuery } from '@/hooks/queries/weather';
import { getHourFromTimestamp } from '@/utils/get-hour-from-timestamp';
import { Location } from '@/types/local';
import { Line, LineChart, ResponsiveContainer, XAxis } from 'recharts';
import { FunctionComponent } from 'react';
import { FilterDataType } from '../wearher-table/weather-table';
import { WeatherData } from '@/types/weather/hourly';

const CustomLabel: FunctionComponent<any> = (props: any) => {
  const { x, y, value } = props;

  return (
    <text className="font-Pretendard" x={x} y={y} dy={20} fontSize={16} textAnchor="middle">
      {value}도
    </text>
  );
};

export default function WeatherChart({ filterData }: FilterDataType) {
  const chartData = filterData.map((item: WeatherData) => ({
    fcstValue: Math.round(item.temp),
  }));

  return (
    <div className="absolute top-28 right-0 w-[calc(100%-56px)]">
      <ResponsiveContainer width="100%" height={80}>
        <LineChart data={chartData} margin={{ top: 20, left: 65, right: 65 }}>
          <Line type="monotone" dataKey="fcstValue" stroke="#8884d8" label={<CustomLabel />} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
