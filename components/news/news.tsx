import { useGetLocalQuery } from '@/hooks/queries/local';
import { useGetNewsQuery } from '@/hooks/queries/news';
import { Location } from '@/types/local';

export default function News({ location }: Location) {
  const { data: localData, isLoading: localQueryLoading } = useGetLocalQuery(location.lat, location.lng);
  const { data: newsData } = useGetNewsQuery(localData, localData && !localQueryLoading);
  console.log(newsData);
  return (
    <section className="layout-container py-14 gap-3 flex flex-col">
      <h2 className="font-bold text-2xl">{localData} 범죄 관련 기사</h2>
      <article className="h-96 bg-slate-700"></article>
    </section>
  );
}
