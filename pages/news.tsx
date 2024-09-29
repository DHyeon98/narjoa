import { getLocal } from '@/apis/local';
import { getNews } from '@/apis/news';
import { getWeather } from '@/apis/weather';
import { dehydrate, HydrationBoundary, QueryClient, useQuery } from '@tanstack/react-query';

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['weather', 36.7853568, 127.1365632],
    queryFn: () => getWeather(36.7853568, 127.1365632),
  });
  await queryClient.prefetchQuery({
    queryKey: ['local', 36.7853568, 127.1365632],
    queryFn: () => getLocal(36.7853568, 127.1365632),
  });
  await queryClient.prefetchQuery({
    queryKey: ['news', '중구', 1],
    queryFn: () => getNews('중구', 1),
  });
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

function TestComponents() {
  const { data } = useQuery({
    queryKey: ['weather', 36.7853568, 127.1365632],
    queryFn: () => getWeather(36.7853568, 127.1365632),
  });
  return <div>{data.lat}</div>;
}

export default function NewsPage({ dehydratedState }: any) {
  return (
    <HydrationBoundary state={dehydratedState}>
      <TestComponents />
    </HydrationBoundary>
  );
}
