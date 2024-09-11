import { MouseEvent, useEffect, useState } from 'react';
import PaginationButton from './pagination-button/pagination-button';
import { getPageNumbers } from '@/utils/get-page-numbers';

interface PaginationType {
  maxPage: number;
  handleClickEvents: {
    pageNumClick: (e: MouseEvent<HTMLButtonElement>) => void;
    pageArrowClick: (condition: 'prev' | 'next') => void;
  };
  currentPage: number;
}

export default function Pagination({ maxPage, handleClickEvents, currentPage }: PaginationType) {
  const [pageNum, setPageNum] = useState(getPageNumbers(currentPage, maxPage));
  const isPreviousDisabled = currentPage === 1;
  const isNextDisabled = currentPage === Math.ceil(maxPage / 5);

  const handlePrevious = () => {
    handleClickEvents.pageArrowClick('prev');
    if (currentPage % 5 === 1) {
      setPageNum((prev) => {
        const firstPage = prev[0] - 5;
        const newPageNum = getPageNumbers(firstPage, maxPage);
        return newPageNum;
      });
    }
  };

  const handleNext = () => {
    handleClickEvents.pageArrowClick('next');
    if (currentPage % 5 === 0) {
      setPageNum((prev) => {
        const lastPage = prev[prev.length - 1];
        const newPageNum = getPageNumbers(lastPage + 1, maxPage);
        return newPageNum;
      });
    }
  };

  useEffect(() => {
    setPageNum(getPageNumbers(currentPage, maxPage));
  }, [maxPage]);

  return (
    <ul className="flex gap-5 items-center max-md:gap-3">
      <li className="rotate-180">
        <PaginationButton isDisabled={isPreviousDisabled} handleClick={handlePrevious} ariaLabel="이전 페이지" />
      </li>
      {pageNum.map((pageNumber) => {
        return (
          <li key={pageNumber}>
            <button
              className={`w-[34px] h-[34px] hover:underline ${
                currentPage === pageNumber && `bg-black text-white rounded-full font-bold`
              } max-md:w-[28px] max-md:h-[28px] max-md:text-sm`}
              type="button"
              value={pageNumber}
              onClick={handleClickEvents.pageNumClick}
            >
              {pageNumber}
            </button>
          </li>
        );
      })}
      <li className="flex ">
        <PaginationButton isDisabled={isNextDisabled} handleClick={handleNext} ariaLabel="다음 페이지" />
      </li>
    </ul>
  );
}
