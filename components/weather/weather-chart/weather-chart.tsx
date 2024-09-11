import { Line, LineChart, ResponsiveContainer, XAxis } from 'recharts';
import { FunctionComponent } from 'react';
import { FilterDataType } from '../wearher-table/weather-table';
import { HourlyType } from '@/types/weather/hourly';

const CustomLabel: FunctionComponent<any> = (props: any) => {
  const { x, y, value } = props;

  return (
    <text className="font-Pretendard" x={x} y={y} dy={20} fontSize={16} textAnchor="middle">
      {value}도
    </text>
  );
};

export default function WeatherChart({ filterData }: FilterDataType) {
  const chartData = filterData.map((item: HourlyType) => ({
    fcstValue: Math.round(item.temp),
  }));
  const responsiveChart = 'max-[1230px]:px-10 max-[1130px]:px-8 max-lg:px-[75px] max-lg:w-[936px] max-lg:left-[56px]';

  return (
    <div className={`absolute top-28 right-0 w-[calc(100%-56px)] px-12 ${responsiveChart}`}>
      <ResponsiveContainer width="100%" height={80}>
        <LineChart data={chartData} margin={{ top: 20, left: 15, right: 15 }}>
          <Line type="monotone" dataKey="fcstValue" stroke="#8884d8" label={<CustomLabel />} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
