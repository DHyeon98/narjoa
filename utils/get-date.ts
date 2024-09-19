/**
 * 날짜 데이터를 받고 월과 일로 포맷하는 유틸입니다.
 */
export function getDateFromTimestamp(utcTime: number) {
  const timestamp = utcTime;
  const date = new Date(timestamp * 1000);
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${month}/${day}`;
}
