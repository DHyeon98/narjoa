import Location from '@/public/images/introduce/location.svg';
import Address from '@/public/images/introduce/address.svg';
import Weather from '@/public/images/introduce/weather.svg';

/**
 * 날씨 제공 서비스 소개하는 글을 상수로 관리합니다.
 */
export const WEATHER_INTRODUCE_DATA = [
  {
    IconComponent: Location,
    text: '사용자의 위치 권한을 허용하거나, 지도를 클릭해서 위치를 설정할 수 있습니다.',
  },
  {
    IconComponent: Address,
    text: '사용자 위치의 위도, 경도 좌표를 받고, 주소로 변환합니다.',
  },
  {
    IconComponent: Weather,
    text: `좌표를 기반으로 해당 위치의 날씨 정보를 가져옵니다.
            단기 예보와 현재 시각으로부터 5시간의 날씨를 제공합니다.`,
  },
];
