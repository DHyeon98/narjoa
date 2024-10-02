import { useGetLocalQuery } from '@/hooks/queries/local';
import { Location } from '@/types/local';
import NewsComponents from './news-components/news-components';

/**
 * 뉴스관련 컴포넌트들이 포함된 컴포넌트 입니다.
 */
export default function News({ location }: Location) {
  const { data, isLoading } = useGetLocalQuery(location.lat, location.lng);

  if (isLoading) return null;
  return (
    <section className="layout-container py-14 flex flex-col">
      <article className="w-3/5 max-lg:w-4/5 max-md:w-full">
        <h2 className="font-bold text-2xl text-[#0c5cb1] max-md:text-xl">{data} 범죄 관련 기사</h2>
        <NewsComponents locateName={data} location={location} />
      </article>
    </section>
  );
}
