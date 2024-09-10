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
      className={`paginationButton ${disabledButtonColor} ${disabledHover}`}
      type="button"
      onClick={handleClick}
      disabled={isDisabled}
      aria-label={ariaLabel}
    >
      <ArrowSVG width={16} height={16} viewBox="0 0 20 20" />
    </button>
  );
}
