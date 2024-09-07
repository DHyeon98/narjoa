import { getNews } from '@/apis/news';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';

export const useGetNewsQuery = (area: string, enabled: boolean, pageNum: number) => {
  return useQuery({
    queryKey: ['news', area, pageNum],
    queryFn: async () => {
      const data = await getNews(area, pageNum);
      return data;
    },
    enabled,
  });
};

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
