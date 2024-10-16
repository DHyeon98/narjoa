import { getWeather } from '@/apis/weather';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';

export interface weatherType {
  baseDate: Date;
  baseTime: string;
  category: string;
  fcstDate: Date;
  fcstTime: string;
  fcstValue: string;
  nx: number;
  ny: number;
}

/**
 * 날씨 데이터를 가져오는 훅입니다.
 */
export const useGetWeatherQuery = (lat: number, lng: number) => {
  return useSuspenseQuery({
    queryKey: ['weather', lat, lng],
    queryFn: () => getWeather(lat, lng),
  });
};
