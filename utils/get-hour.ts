export function getHour(utcTime: number) {
  const timestamp = utcTime;
  const date = new Date(timestamp * 1000);
  const hours = date.getHours();

  return hours;
}
