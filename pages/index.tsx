import { getLocal } from '@/apis/local';
import { dfs_xy_conv } from '@/utils/xy-conversion';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude, position.coords.longitude);
    });
  }, []);
  return <div>메인</div>;
}
