import { Line, LineChart, ResponsiveContainer } from 'recharts';
import { FunctionComponent } from 'react';
import { FilterDataType } from '../wearher-table/weather-table';
import { HourlyType } from '@/types/weather/hourly';

/**
 * 차트 label을 커스텀한 컴포넌트 입니다.
 * 온도 값과 위치 값을 받고, 해당 값을 text로 반환합니다.
 */
const CustomLabel: FunctionComponent<any> = (props: any) => {
  const { x, y, value } = props;

  return (
    <text className="font-Pretendard" x={x} y={y} dy={20} fontSize={16} textAnchor="middle">
      {value}도
    </text>
  );
};

/**
 * 날씨 차트를 구현한 컴포넌트 입니다.
 * Rechart 컴포넌트를 사용하여 개발했습니다.
 */
export default function WeatherChart({ filterData }: FilterDataType) {
  // 객체 배열로 구성된 filterData의 온도 정보를 가져오는 변수입니다.
  const chartData = filterData.map((item: HourlyType) => ({
    fcstValue: Math.round(item.temp),
  }));
  // 차트 컨테이너의 반응형 스타일 코드 가독성을 위해 변수로 관리했습니다.
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
