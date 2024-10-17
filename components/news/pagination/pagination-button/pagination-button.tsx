import ArrowSVG from '@/public/images/arrow.svg';

interface PaginationButtonType {
  isDisabled: boolean;
  handleClick: () => void;
  ariaLabel: string;
}

/**
 * 페이지네이션의 버튼 컴포넌트 입니다.
 */
export default function PaginationButton({ isDisabled, handleClick, ariaLabel }: PaginationButtonType) {
  // disable 상태일때 버튼의 호버와 컬러 조건문 입니다.
  const disabledButtonColor = isDisabled ? 'bg-[#e7e7e7] fill-[#888]' : 'bg-white fill-[#555]';
  const disabledHover = !isDisabled && 'hover:bg-black hover:fill-white';
  const buttonRotation = ariaLabel === '이전 페이지' ? 'rotate-180' : 'flex';
  return (
    <li className={`${buttonRotation}`}>
      <button
        className={`paginationButton ${disabledButtonColor} ${disabledHover} max-md:w-[28px] max-md:h-[28px]`}
        type="button"
        onClick={handleClick}
        disabled={isDisabled}
        aria-label={ariaLabel}
      >
        <div className="w-[16px] h-[16px] max-md:w-[12px] max-md:h-[12px]">
          <ArrowSVG width="100%" height="100%" viewBox="0 0 20 20" />
        </div>
      </button>
    </li>
  );
}
