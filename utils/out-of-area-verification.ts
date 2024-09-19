/**
 * 대한민국의 최소, 최대 위도, 경도를 설정한 조건문 입니다.
 */
export const OutOfAreaVerification = (lat: number, lng: number) =>
  38.6089931279 > lat && 33.1160704446 < lat && 130.9366030318 > lng && 125.0834245793 < lng;
