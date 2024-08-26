import { useGetWeatherQuery, weatherType } from '@/hooks/queries/weather';
import { getBaseDateTime } from '@/utils/get-base-time';
import { useEffect, useState } from 'react';
import LineRechart from '../line-rechart/line-rechart';
import { dfs_xy_conv } from '@/utils/xy-conversion';
import { LocationType } from '@/pages';
import { WeatherArgumentType } from '@/apis/weather';

interface WeatherChartType {
  location: LocationType;
}

export default function WeatherChart({ location }: WeatherChartType) {
  const { baseDate, baseTime } = getBaseDateTime();
  const [chartData, setChartData] = useState<WeatherArgumentType>();
  const { data, isLoading } = useGetWeatherQuery(location.lat, location.lng);
  console.log(data);

  // const filterData = data?.map((item: weatherType) => ({
  //   fcstTime: item.fcstTime.slice(0, 2) + '시',
  //   fcstValue: item.fcstValue,
  // }));

  // // useEffect(() => {
  // //   const rs = dfs_xy_conv(location.lat, location.lng);
  // //   const datas = {
  // //     lat: rs.x,
  // //     lng: rs.y,
  // //   };
  // //   setChartData(datas);
  // // }, [location]);
  // if (isLoading) return <div>로딩</div>;
  // return <LineRechart chartData={filterData} />;
  return <div>sa</div>;
}
