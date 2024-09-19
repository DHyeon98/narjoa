/**
 * 날짜 데이터를 받고 시간만 가져오는 유틸입니다.
 */
export function getHourFromTimestamp(utcTime: number) {
  const timestamp = utcTime;
  const date = new Date(timestamp * 1000);
  const hours = date.getHours();

  return hours;
}
