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
      centerData.forEach((center) => {
        const marker = new window.kakao.maps.Marker({
          position: new window.kakao.maps.LatLng(center.latitude, center.longitude),
        });
        const content = `<div class="bg-blue-600 text-center relative -bottom-6 p-2 rounded">
        <p class="font-Pretendard text-white font-medium">${center.storNm}</p>
      </div>`;

        const customOverlay = new window.kakao.maps.CustomOverlay({
          position: marker.getPosition(),
          content: content,
          map: map,
        });
        customOverlay.setMap(null);

        window.kakao.maps.event.addListener(marker, 'mouseover', () => {
          customOverlay.setMap(map);
        });

        window.kakao.maps.event.addListener(marker, 'mouseout', () => {
          customOverlay.setMap(null);
        });
        marker.setMap(map);
      });
    }
  }, [centerData]);
  return <div id="map" style={{ width: '100%', height: '600px' }} />; // 높이를 100px에서 600px로 변경
}
