import { getLocal } from '@/apis/local';
import { useQuery } from '@tanstack/react-query';

export const useGetLocalQuery = (lat: number, lng: number) => {
  return useQuery({
    queryKey: ['local', lat, lng],
    queryFn: async () => {
      const data = await getLocal(lng, lat);
      return data;
    },
  });
};
