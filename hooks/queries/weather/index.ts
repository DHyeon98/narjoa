import { getWeather, weatherArgumentType } from '@/apis/weather';
import { useQuery } from '@tanstack/react-query';

export const useGetWeatherQuery = (queryData: weatherArgumentType) => {
  return useQuery({
    queryKey: ['weather'],
    queryFn: async () => await getWeather(queryData),
  });
};
