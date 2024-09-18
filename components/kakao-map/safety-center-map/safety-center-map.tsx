import { getSafeCenter, SafeCenterType } from '@/apis/map';
import { customMarkerOption } from '@/constants/custom-marker-current-option';
import { useCustomMarker } from '@/hooks/custom-marker/use-custom-marker';
import { Location } from '@/types/local';
import { createMarker, createMarkerClusterer } from '@/utils/safety-map-utils';
import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

export default function SafetyCenterMap({ location }: Location) {
  const safetyCenterMapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);
  const customMarker = useCustomMarker(customMarkerOption(map, location));

  const fetchData = async () => {
    const response = await getSafeCenter();
    return response.records;
  };

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
