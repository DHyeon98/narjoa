import { getSafeCenter, SafeCenterType } from '@/apis/map';
import { useEffect, useState } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

export default function KakaoMap() {
  const [centerData, setCenterData] = useState<SafeCenterType[]>();
  const fetchData = async () => {
    const response = await getSafeCenter();
    setCenterData(response.records);
  };
  console.log(centerData);

  useEffect(() => {
    fetchData();
    var container = document.getElementById('map');
    var options = {
      center: new window.kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 3,
    };

    var map = new window.kakao.maps.Map(container, options);
    var markerPosition = new window.kakao.maps.LatLng(37.365264512305174, 127.10676860117488);
    var marker = new window.kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, []);
  return <div id="map" style={{ width: '100%', height: '600px' }} />; // 높이를 100px에서 600px로 변경
}
