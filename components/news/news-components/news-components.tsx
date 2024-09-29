import { useGetNewsQuery, usePrefetchNews } from '@/hooks/queries/news';
import { MouseEvent, useEffect, useState } from 'react';
import NewsList from '../news-list/news-list';
import Pagination from '../pagination/pagination';
import { LocationType } from '@/types/local';
import { Spinner } from '@/components/spinner/spinner';

interface NewsComponentsType {
  locateName: string;
  location: LocationType;
}

export default function NewsComponents({ locateName, location }: NewsComponentsType) {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = useGetNewsQuery(locateName, currentPage);

  // 컴포넌트로 넘겨줄 클릭 이벤트 함수를 담고 있는 객체 입니다.
  // 페이지 숫자를 클릭했을 때와 이전, 다음 페이지 클릭시 발생될 이벤트로 구성되어 있습니다.
  const handleClickEvents = {
    pageNumClick: (e: MouseEvent<HTMLButtonElement>) => {
      setCurrentPage(Number(e.currentTarget.value));
    },
    pageArrowClick: (condition: 'prev' | 'next') => {
      setCurrentPage((current) => (condition === 'prev' ? current - 1 : current + 1));
    },
  };

  usePrefetchNews(locateName, currentPage);

  // location 값이 변할 때마다 페이지를 1로 초기화 합니다.
  useEffect(() => {
    setCurrentPage(1);
  }, [location]);

  if (isLoading)
    return (
      <div className="min-h-[400px] flex-center">
        <Spinner />
      </div>
    );
  return (
    <>
      <NewsList newsData={data.items} />
      <Pagination maxPage={data.total} handleClickEvents={handleClickEvents} currentPage={currentPage} />
    </>
  );
}
