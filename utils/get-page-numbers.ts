export const getPageNumbers = (currentPage: number, maxPage: number) => {
  const startPage = Math.floor((currentPage - 1) / 5) * 5 + 1;
  const endPage = Math.min(startPage + 4, Math.ceil(maxPage / 5));
  return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
};
