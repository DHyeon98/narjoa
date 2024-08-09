export function getBaseDateTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  // 현재 시간을 "HH:MM" 형식으로 문자열로 변환
  const currentTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;

  // 시간 구간 정의
  const intervals = [
    { start: '02:10', end: '05:10', baseTime: '0200' },
    { start: '05:10', end: '08:10', baseTime: '0500' },
    { start: '08:10', end: '11:10', baseTime: '0800' },
    { start: '11:10', end: '14:10', baseTime: '1100' },
    { start: '14:10', end: '17:10', baseTime: '1400' },
    { start: '17:10', end: '20:10', baseTime: '1700' },
    { start: '20:10', end: '23:10', baseTime: '2000' },
    { start: '23:10', end: '02:10', baseTime: '2300' }, // '23:10' - '02:10' 구간
  ];

  let baseDate = '';
  let baseTime = '';

  // '23:10' - '02:10' 구간을 처리
  const isCrossMidnight = intervals[intervals.length - 1];

  // 현재 시간이 구간을 넘어가는 경우 처리
  if (currentTime >= isCrossMidnight.start || currentTime < intervals[0].start) {
    baseDate = hours < 2 ? getFormattedDate(-1) : getFormattedDate();
    baseTime = isCrossMidnight.baseTime;
  } else {
    // 시간 구간에 따라 baseTime 결정
    for (const interval of intervals) {
      if (interval.start < interval.end) {
        if (currentTime >= interval.start && currentTime < interval.end) {
          baseTime = interval.baseTime;
          baseDate = getFormattedDate();
          break;
        }
      } else {
        // 시간 구간이 자정 이후로 넘어가는 경우 처리
        if (currentTime >= interval.start || currentTime < interval.end) {
          baseTime = interval.baseTime;
          baseDate = hours < 2 ? getFormattedDate(-1) : getFormattedDate();
          break;
        }
      }
    }
  }

  return { baseDate, baseTime };
}

function getFormattedDate(offset = 0) {
  const date = new Date();
  date.setDate(date.getDate() + offset);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}${month}${day}`;
}
