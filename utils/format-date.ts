export function formatDate(originDate: Date) {
  const date = new Date(originDate);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 월을 2자리로
  const day = String(date.getDate()).padStart(2, '0'); // 일을 2자리로
  const hours = String(date.getHours()).padStart(2, '0'); // 시간을 2자리로
  const minutes = String(date.getMinutes()).padStart(2, '0'); // 분을 2자리로

  return `${year}.${month}.${day} ${hours}:${minutes}`;
}
