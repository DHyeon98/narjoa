import { useGetWeatherQuery } from '@/hooks/queries/weather';
import { getHourFromTimestamp } from '@/utils/get-hour-from-timestamp';
import { Location } from '@/types/local';
import { Line, LineChart, ResponsiveContainer, XAxis } from 'recharts';
import { FunctionComponent } from 'react';

const CustomLabel: FunctionComponent<any> = (props: any) => {
  const { x, y, value } = props;

  return (
    <text className="font-Pretendard" x={x} y={y} dy={20} fontSize={16} textAnchor="middle">
      {value}도
    </text>
  );
};

export default function WeatherChart({ location }: Location) {
  const { data, isLoading } = useGetWeatherQuery(location.lat, location.lng);

  const chartData =
    !isLoading &&
    data.hourly.slice(0, 5).map((item: any) => ({
      fcstValue: Math.round(item.temp),
    }));

  if (isLoading) return <div>로딩</div>;
  return (
    <div>
      <ResponsiveContainer width="100%" height={80}>
        <LineChart data={chartData} margin={{ top: 20, left: 32, right: 32 }}>
          <Line type="monotone" dataKey="fcstValue" stroke="#8884d8" label={<CustomLabel />} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
