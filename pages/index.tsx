import { getLocal } from '@/apis/local';
import LineChart from '@/components/line-chart/line-chart';
import { useGetWeatherQuery } from '@/hooks/queries/weather';
import { getBaseDateTime } from '@/utils/get-base-time';
import { dfs_xy_conv } from '@/utils/xy-conversion';
import { use, useEffect, useState } from 'react';
// import { Bar } from 'react-chartjs-2';

interface locationType {
  x: number;
  y: number;
}

export default function Home() {
  const [localValue, setLocalValue] = useState<locationType>();
  const { baseDate, baseTime } = getBaseDateTime();
  const datas = localValue && {
    date: baseDate,
    time: baseTime,
    xValue: localValue.x,
    yValue: localValue.y,
  };

  const { data } = useGetWeatherQuery(datas!);

  useEffect(() => {
    try {
      navigator.geolocation.getCurrentPosition((position) => {
        const rs = dfs_xy_conv(position.coords.latitude, position.coords.longitude);
        setLocalValue(rs);
      });
    } catch {
      console.log('에러');
    }
  }, []);

  console.log(data);

  if (!localValue) return null;
  return (
    <>
      <div>
        {localValue.x} {localValue.y}
      </div>
      <LineChart />
    </>
  );
}
