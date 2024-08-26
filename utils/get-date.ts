export function getDateFromTimestamp(utcTime: number) {
  const timestamp = utcTime;
  const date = new Date(timestamp * 1000);
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${month}/${day}`;
}
