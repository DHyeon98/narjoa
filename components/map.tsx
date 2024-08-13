import { getSafeCenter, SafeCenterType } from '@/apis/map';
import { LocationType } from '@/pages';
import { useEffect, useState } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

interface KakaoMapType {
  location: LocationType;
}

export default function KakaoMap({ location }: KakaoMapType) {
  const [centerData, setCenterData] = useState<SafeCenterType[]>([]);

  const fetchData = async () => {
    const response = await getSafeCenter();
    setCenterData(response.records);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new window.kakao.maps.LatLng(location.lat, location.lng),
      level: 3,
    };

    const map = new window.kakao.maps.Map(container, options);

    if (centerData.length > 0) {
      console.log(centerData);
      centerData.forEach((center) => {
        const markerPosition = new window.kakao.maps.LatLng(center.latitude, center.longitude);
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
      });
    } else {
      const markerPosition = new window.kakao.maps.LatLng(37.365264512305174, 127.10676860117488);
      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
      });
      marker.setMap(map);
    }
  }, [centerData]);
  return <div id="map" style={{ width: '100%', height: '600px' }} />; // 높이를 100px에서 600px로 변경
}
