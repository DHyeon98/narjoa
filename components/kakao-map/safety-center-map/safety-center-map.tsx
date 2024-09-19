import { getSafeCenter, SafeCenterType } from '@/apis/map';
import { useCustomMarker } from '@/hooks/use-custom-marker';
import { Location } from '@/types/local';
import { createMarker, createMarkerClusterer } from '@/utils/safety-map-utils';
import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

/**
 * 여성안전지킴이 집을 지도로 알려주는 컴포넌트 입니다.
 * 지도 생성 및 클러스터와 마커를 생성하는 함수로 구성되어 있습니다.
 */
export default function SafetyCenterMap({ location }: Location) {
  const safetyCenterMapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);
  const customMarker = useCustomMarker(map, location);

  const fetchData = async () => {
    const response = await getSafeCenter();
    return response.records;
  };

  // 지도 생성 및 마커, 클러스터 생성 함수입니다.
  useEffect(() => {
    if (!window.kakao) return;
    window.kakao.maps.load(() => {
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

      fetchData().then((data) => {
        const markers = data.map((center: SafeCenterType) => createMarker(center, newMap));
        createMarkerClusterer(newMap, markers);
      });
    });
  }, []);

  // location 값이 변경됐을 때 지도, 마커의 중앙이 변경되는 함수입니다.
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
