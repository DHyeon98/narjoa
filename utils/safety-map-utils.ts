// mapUtils.ts
import { SafeCenterType } from '@/apis/map';

export const createMarker = (center: SafeCenterType, map: any) => {
  const marker = new window.kakao.maps.Marker({
    position: new window.kakao.maps.LatLng(center.latitude, center.longitude),
  });

  const content = `
    <div class="bg-blue-600 text-center relative -bottom-6 p-2 rounded">
      <p class="font-Pretendard text-white font-medium">${center.storNm}</p>
    </div>
  `;

  const customOverlay = new window.kakao.maps.CustomOverlay({
    position: marker.getPosition(),
    content: content,
  });
  customOverlay.setMap(null);

  const clickMarker = () => {
    customOverlay.getMap() ? customOverlay.setMap(null) : customOverlay.setMap(map);
  };
  const clickMap = () => customOverlay.setMap(null);

  window.kakao.maps.event.addListener(marker, 'click', clickMarker);
  window.kakao.maps.event.addListener(map, 'click', clickMap);

  return { marker, customOverlay };
};

export const createMarkerClusterer = (map: any, markers: any[]) => {
  const clusterer = new window.kakao.maps.MarkerClusterer({
    map: map,
    averageCenter: true,
    minLevel: 10,
    disableClickZoom: true,
  });

  clusterer.addMarkers(markers.map((m) => m.marker));
  return clusterer;
};
