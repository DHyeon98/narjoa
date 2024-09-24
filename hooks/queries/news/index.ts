import { getNews } from '@/apis/news';
import { useQuery, useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

/**
 * 뉴스 데이터를 받아오는 훅입니다.
 * 장소 데이터를 가져온 후 뉴스 정보를 가져와야하기 때문에 enabled 조건을 추가했습니다.
 */
export const useGetNewsQuery = (area: string, pageNum: number) => {
  return useSuspenseQuery({
    queryKey: ['news', area, pageNum],
    queryFn: () => getNews(area, pageNum),
  });
};

/**
 * 뉴스 데이터를 프리패칭 하는 훅입니다.
 * 현재 페이지에서 +1 한 페이지를 프리패칭 합니다.
 * 위치 값이나 최대 페이지 수가 변할 때 마다 실행됩니다.
 */
export const usePrefetchNews = (localData: string, currentPage: number) => {
  const queryClient = useQueryClient();
  const nextPage = currentPage + 1;

  useEffect(() => {
    if (localData) {
      queryClient.prefetchQuery({
        queryKey: ['news', localData, nextPage],
        queryFn: () => getNews(localData, nextPage),
      });
    }
  }, [localData, currentPage, queryClient]);
};
