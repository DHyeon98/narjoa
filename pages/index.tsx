import { getLocal } from '@/apis/local';
import { getBaseDateTime } from '@/utils/get-now-time';
import { dfs_xy_conv } from '@/utils/xy-conversion';
import { use, useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude, position.coords.longitude);
    });
    const { baseDate, baseTime } = getBaseDateTime();
    console.log(baseDate, baseTime);
  }, []);
  return <div>메인</div>;
}
