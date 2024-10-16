import { getLocal } from '@/apis/local';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';

/**
 * 장소 데이터를 가져오는 훅입니다.
 */
export const useGetLocalQuery = (lat: number, lng: number) => {
  return useSuspenseQuery({
    queryKey: ['local', lat, lng],
    queryFn: () => getLocal(lng, lat),
  });
};
