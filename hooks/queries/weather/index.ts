import { getWeather, weatherArgumentType } from '@/apis/weather';
import { useQuery } from '@tanstack/react-query';

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

export const useGetWeatherQuery = (queryData: weatherArgumentType) => {
  return useQuery({
    queryKey: ['weather', queryData],
    queryFn: async () => {
      const data = await getWeather(queryData);
      return data.response.body.items.item.filter((item: weatherType) => item.category === 'TMP');
    },
  });
};
