// pages/news.tsx
import { getNews } from '@/apis/news';
import { getWeather } from '@/apis/weather';
import { useQuery } from '@tanstack/react-query';

export async function getServerSideProps() {
  try {
    const dataTest = await getWeather(36.7853568, 127.1365632);
    return { props: { dataTest } };
  } catch {
    console.log('에러');
  }
}

export default function NewsPage({ dataTest }: any) {
  const { data } = useQuery({
    queryKey: ['weather', 36.7853568, 127.1365632],
    queryFn: () => getWeather(36.7853568, 127.1365632),
    initialData: dataTest,
  });
  return <div>{dataTest.lat}</div>;
}
