export function getCurrentDate() {
  const currentDate = new Date();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  return `${month}/${day}`;
}
