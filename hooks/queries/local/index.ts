import { getLocal } from '@/apis/local';
import { useQuery } from '@tanstack/react-query';

export const useGetLocalQuery = (lat: number, lng: number) => {
  return useQuery({
    queryKey: ['local'],
    queryFn: async () => {
      const data = await getLocal(lat, lng);
      return data;
    },
  });
};
