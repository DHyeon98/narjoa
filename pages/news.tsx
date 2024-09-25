// pages/news.tsx
import { getNews } from '@/apis/news';
import { getWeather } from '@/apis/weather';

export async function getServerSideProps() {
  try {
    const dataTest = await getWeather(36.7853568, 127.1365632);
    return { props: { dataTest } };
  } catch {
    console.log('에러');
  }
}

export default function NewsPage({ dataTest }: any) {
  console.log(dataTest);
  return <div>s</div>;
}
