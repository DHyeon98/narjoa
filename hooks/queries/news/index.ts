import { getNews } from '@/apis/news';
import { useQuery } from '@tanstack/react-query';

export const useGetNewsQuery = (area: string, enabled: boolean) => {
  return useQuery({
    queryKey: ['news', area],
    queryFn: async () => {
      const data = await getNews(area);
      return data;
    },
    enabled,
  });
};
