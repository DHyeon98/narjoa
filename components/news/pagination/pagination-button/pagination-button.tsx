import ArrowSVG from '@/public/images/arrow.svg';

interface PaginationButtonType {
  isDisabled: boolean;
  handleClick: () => void;
  ariaLabel: string;
}

export default function PaginationButton({ isDisabled, handleClick, ariaLabel }: PaginationButtonType) {
  const disabledButtonColor = isDisabled ? 'bg-[#e7e7e7] fill-[#888]' : 'bg-white fill-[#555]';
  const disabledHover = !isDisabled && 'hover:bg-black hover:fill-white';
  return (
    <button
      className={`paginationButton ${disabledButtonColor} ${disabledHover} max-md:w-[24px] max-md:h-[24px]`}
      type="button"
      onClick={handleClick}
      disabled={isDisabled}
      aria-label={ariaLabel}
    >
      <div className="w-[16px] h-[16px] max-md:w-[12px] max-md:h-[12px]">
        <ArrowSVG width="100%" height="100%" viewBox="0 0 20 20" />
      </div>
    </button>
  );
}
