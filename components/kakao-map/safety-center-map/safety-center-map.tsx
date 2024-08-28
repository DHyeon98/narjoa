import { getSafeCenter, SafeCenterType } from '@/apis/map';
import { Location } from '@/types/local';
import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

export default function SafetyCenterMap({ location }: Location) {
  const safetyCenterMapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);

  const fetchData = async () => {
    const response = await getSafeCenter();
    return response.records;
  };

  useEffect(() => {
    if (!window.kakao) return;

    const container = safetyCenterMapRef.current;
    const options = {
      center: new window.kakao.maps.LatLng(location.lat, location.lng),
      level: 3,
    };
    const newMap = new window.kakao.maps.Map(container, options);
    setMap(newMap);

    fetchData().then((data) => {
      const markers = data.map((center: SafeCenterType) => {
        const marker = new window.kakao.maps.Marker({
          position: new window.kakao.maps.LatLng(center.latitude, center.longitude),
        });
        const content = `<div class="bg-blue-600 text-center relative -bottom-6 p-2 rounded">
          <p class="font-Pretendard text-white font-medium">${center.storNm}</p>
        </div>`;

        const customOverlay = new window.kakao.maps.CustomOverlay({
          position: marker.getPosition(),
          content: content,
        });
        customOverlay.setMap(null);

        const clickMarker = () => (customOverlay.getMap() ? customOverlay.setMap(null) : customOverlay.setMap(newMap));
        const clickMap = () => customOverlay.setMap(null);

        window.kakao.maps.event.addListener(marker, 'click', clickMarker);
        window.kakao.maps.event.addListener(newMap, 'click', clickMap);
        return marker;
      });

      const clusterer = new window.kakao.maps.MarkerClusterer({
        map: newMap,
        averageCenter: true,
        minLevel: 10,
        disableClickZoom: true,
      });

      clusterer.addMarkers(markers);
    });
  }, []);

  useEffect(() => {
    if (map && location) {
      const moveLatLon = new window.kakao.maps.LatLng(location.lat, location.lng);
      map.setCenter(moveLatLon);
    }
  }, [location, map]);
  return (
    <div className="h-full">
      <div ref={safetyCenterMapRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
}
