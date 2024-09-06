import ArrowSVG from '@/public/images/arrow.svg';

interface PaginationButtonType {
  isDisabled: boolean;
  handleClick: () => void;
  ariaLabel: string;
}

export default function PaginationButton({ isDisabled, handleClick, ariaLabel }: PaginationButtonType) {
  return (
    <button
      className={`paginationButton ${isDisabled ? 'bg-[#e7e7e7]' : 'bg-white'}`}
      type="button"
      onClick={handleClick}
      disabled={isDisabled}
      aria-label={ariaLabel}
    >
      <ArrowSVG fill={isDisabled ? '#888' : '#555'} width={16} height={16} viewBox="0 0 20 20" />
    </button>
  );
}
