import { getSafeCenter, SafeCenterType } from '@/apis/map';
import { useCustomMarker } from '@/hooks/custom-marker/use-custom-marker';
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
  const customMarkerOption = {
    map: map,
    location: location,
    size: {
      width: 50,
      height: 50,
    },
    position: {
      x: 28,
      y: 40,
    },
  };
  const customMarker = useCustomMarker(customMarkerOption);

  const fetchData = async () => {
    const response = await getSafeCenter();
    return response.records;
  };

  useEffect(() => {
    if (!window.kakao) return;

    const container = safetyCenterMapRef.current;
    const options = {
      center: new window.kakao.maps.LatLng(location.lat, location.lng),
      level: 5,
      scrollwheel: false,
      disableDoubleClickZoom: true,
      draggable: false,
    };
    const newMap = new window.kakao.maps.Map(container, options);
    setMap(newMap);

    // 여성안심지킴이집 데이터 패치 후 지도에 마커 표시 및 클러스터
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

      if (customMarker) {
        customMarker.setPosition(moveLatLon);
      }
    }
  }, [location, map]);
  return (
    <div className="h-96 w-1/2 max-md:w-full max-md:h-60">
      <div ref={safetyCenterMapRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
}
