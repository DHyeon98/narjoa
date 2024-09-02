import { useGetLocalQuery } from '@/hooks/queries/local';
import { useGetNewsQuery } from '@/hooks/queries/news';
import { Location } from '@/types/local';
import NewsList from './news-list/news-list';

export default function News({ location }: Location) {
  const { data: localData, isLoading: localQueryLoading } = useGetLocalQuery(location.lat, location.lng);
  const { data: newsData, isLoading: newsQueryLoading } = useGetNewsQuery(localData, localData && !localQueryLoading);

  if (newsQueryLoading) return <div>로딩중</div>;
  return (
    <section className="layout-container py-14 flex flex-col">
      <h2 className="font-bold text-2xl text-[#0c5cb1]">{localData} 범죄 관련 기사</h2>
      <NewsList newsData={newsData.items} />
    </section>
  );
}
