import { useGetLocalQuery } from '@/hooks/queries/local';
import { useGetNewsQuery, usePrefetchNews } from '@/hooks/queries/news';
import { Location } from '@/types/local';
import NewsList from './news-list/news-list';
import Pagination from './pagination/pagination';
import { MouseEvent, useEffect, useState } from 'react';

export default function News({ location }: Location) {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: localData, isLoading: localQueryLoading } = useGetLocalQuery(location.lat, location.lng);
  const { data: newsData, isLoading: newsQueryLoading } = useGetNewsQuery(
    localData,
    localData && !localQueryLoading,
    currentPage,
  );

  const handleClickEvents = {
    pageNumClick: (e: MouseEvent<HTMLButtonElement>) => {
      setCurrentPage(Number(e.currentTarget.value));
    },
    pageArrowClick: (condition: 'prev' | 'next') => {
      setCurrentPage((current) => (condition === 'prev' ? current - 1 : current + 1));
    },
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [location]);

  usePrefetchNews(localData, currentPage);

  if (newsQueryLoading) return <div>로딩중</div>;
  return (
    <section className="layout-container py-14 flex flex-col">
      <article className="w-3/5">
        <h2 className="font-bold text-2xl text-[#0c5cb1]">{localData} 범죄 관련 기사</h2>
        <NewsList newsData={newsData.items} />
        <div className="flex justify-center mt-4">
          <Pagination maxPage={newsData.total} handleClickEvents={handleClickEvents} currentPage={currentPage} />
        </div>
      </article>
    </section>
  );
}
