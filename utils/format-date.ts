/**
 * 날짜 데이터를 받고 리턴되는 값으로 포맷하는 유틸입니다.
 */
export function formatDate(originDate: Date) {
  const date = new Date(originDate);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${year}.${month}.${day} ${hours}:${minutes}`;
}
