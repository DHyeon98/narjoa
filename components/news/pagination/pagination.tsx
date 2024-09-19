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

/**
 * 페이지네이션 컴포넌트 입니다.
 * 페이지네이션 관련 유틸과 이전, 다음 페이지로 가는 버튼 컴포넌트로 구성되어 있습니다.
 */
export default function Pagination({ maxPage, handleClickEvents, currentPage }: PaginationType) {
  const [pageNum, setPageNum] = useState(getPageNumbers(currentPage, maxPage));
  const isPreviousDisabled = currentPage === 1;
  const isNextDisabled = currentPage === Math.ceil(maxPage / 5);

  // 이전 페이지 이동과 페이지 숫자를 변경하는 함수입니다.
  // 만약 현재 페이지가 5로 나누었을 때 1이 남는다면 페이지 이동이 되지 않습니다.
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

  // 다음 페이지 이동과 페이지 숫자를 변경하는 함수입니다.
  // 만약 현재 페이지가 5로 나누어 떨어지면 페이지 이동이 되지 않습니다.
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

  // 최대 페이지 수가 변한다면 페이지네이션의 페이지 수가 변경됩니다.
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
