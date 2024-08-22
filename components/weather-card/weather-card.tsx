import { getLocal } from '@/apis/local';
import { useGetLocalQuery } from '@/hooks/queries/local';
import { LocationType } from '@/pages';
import { dfs_xy_conv } from '@/utils/xy-conversion';
import { useEffect } from 'react';

interface WeatherCardType {
  location: LocationType;
}

export default function WeatherCard({ location }: WeatherCardType) {
  const { data } = useGetLocalQuery(location.lat, location.lng);
  console.log(data);
  useEffect(() => {
    const rs = dfs_xy_conv(location.lat, location.lng);
    localStorage.setItem('x', String(rs.x));
    localStorage.setItem('y', String(rs.y));
  }, []);
  return <div className="font-Pretendard font-bold">자동화 테스트5</div>;
}
