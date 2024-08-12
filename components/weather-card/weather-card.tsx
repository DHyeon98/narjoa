import { dfs_xy_conv } from '@/utils/xy-conversion';
import { useEffect } from 'react';

export default function WeatherCard() {
  useEffect(() => {
    try {
      navigator.geolocation.getCurrentPosition((position) => {
        const rs = dfs_xy_conv(position.coords.latitude, position.coords.longitude);
        localStorage.setItem('x', String(rs.x));
        localStorage.setItem('y', String(rs.y));
      });
    } catch {
      console.log('에러');
    }
  }, []);
  return <div className="font-Pretendard font-bold">날씨</div>;
}
