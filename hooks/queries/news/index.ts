import { getNews } from '@/apis/news';
import { useQuery } from '@tanstack/react-query';

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
