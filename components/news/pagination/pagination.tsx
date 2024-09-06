import { MouseEvent, useEffect, useState } from 'react';
import PaginationButton from './pagination-button/pagination-button';

interface PaginationType {
  maxPage: number;
  handlePage: (e: MouseEvent<HTMLButtonElement>) => void;
  currentPage: number;
}

const getPageNumbers = (currentPage: number, maxPage: number) => {
  const startPage = Math.floor((currentPage - 1) / 5) * 5 + 1;
  const endPage = Math.min(startPage + 4, Math.ceil(maxPage / 5));
  return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
};

export default function Pagination({ maxPage, handlePage, currentPage }: PaginationType) {
  const [pageNum, setPageNum] = useState<number[]>(getPageNumbers(currentPage, maxPage));
  const isPreviousDisabled = pageNum[0] === 1;
  const isNextDisabled = pageNum[pageNum.length - 1] === Math.ceil(maxPage / 5);

  const pagePrevious = () => {
    setPageNum((prev) => {
      const firstPage = prev[0] - 5;
      const newPageNum = getPageNumbers(firstPage, maxPage);
      return newPageNum;
    });
  };

  const pageNext = () => {
    setPageNum((prev) => {
      const lastPage = prev[prev.length - 1];
      const newPageNum = getPageNumbers(lastPage + 1, maxPage);
      return newPageNum;
    });
  };

  useEffect(() => {
    setPageNum(getPageNumbers(currentPage, maxPage));
  }, [maxPage]);
  return (
    <ul className="flex gap-5 items-center">
      <li className="rotate-180">
        <PaginationButton isDisabled={isPreviousDisabled} handleClick={pagePrevious} ariaLabel="이전 페이지" />
      </li>
      {pageNum.map((pageNumber) => {
        return (
          <li key={pageNumber}>
            <button
              className={`w-[34px] h-[34px] ${
                currentPage === pageNumber && `bg-black text-white rounded-full font-bold`
              }`}
              type="button"
              value={pageNumber}
              onClick={handlePage}
            >
              {pageNumber}
            </button>
          </li>
        );
      })}
      <li className="flex ">
        <PaginationButton isDisabled={isNextDisabled} handleClick={pageNext} ariaLabel="다음 페이지" />
      </li>
    </ul>
  );
}
