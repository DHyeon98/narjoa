import { useGetWeatherQuery, weatherType } from '@/hooks/queries/weather';
import { getBaseDateTime } from '@/utils/get-base-time';
import { useEffect, useState } from 'react';
import LineRechart from '../line-rechart/line-rechart';

interface ChartDataType {
  date: string;
  time: string;
  xValue: number;
  yValue: number;
}

export default function WeatherChart() {
  const { baseDate, baseTime } = getBaseDateTime();
  const [chartData, setChartData] = useState<ChartDataType>();
  const { data, isLoading } = useGetWeatherQuery(chartData!);

  const filterData = data?.map((item: weatherType) => ({
    fcstTime: item.fcstTime.slice(0, 2) + '시',
    fcstValue: item.fcstValue,
  }));

  useEffect(() => {
    const datas = {
      date: baseDate,
      time: baseTime,
      xValue: Number(localStorage.getItem('x')),
      yValue: Number(localStorage.getItem('y')),
    };
    setChartData(datas);
  }, []);
  if (isLoading) return <div>로딩</div>;
  return <LineRechart chartData={filterData} />;
}
