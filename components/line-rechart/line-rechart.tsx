import React, { FunctionComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface LineChartDataType {
  chartData: {
    fcstTime: string;
    fcstValue: string;
  }[];
}

const CustomLabel: FunctionComponent<any> = (props: any) => {
  const { x, y, value } = props;

  return (
    <text className="font-Pretendard" x={x} y={y} dy={20} fontSize={16} textAnchor="middle">
      {value}도
    </text>
  );
};

export default function LineRechart({ chartData }: LineChartDataType) {
  return (
    <ResponsiveContainer width="100%" height={150}>
      <LineChart
        data={chartData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 10,
        }}
      >
        <XAxis
          className="font-Pretendard"
          stroke="#1c1c1c"
          dataKey="fcstTime"
          tickLine={false}
          padding={{ left: 30, right: 30 }}
        />
        <Line type="monotone" dataKey="fcstValue" stroke="#8884d8" label={<CustomLabel />} />
      </LineChart>
    </ResponsiveContainer>
  );
}
