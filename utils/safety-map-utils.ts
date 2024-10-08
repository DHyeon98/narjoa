// mapUtils.ts
import { SafeCenterType } from '@/apis/map';

/**
 * 마커 생성 및 마커 관련 유틸입니다.
 */
export const createMarker = (center: SafeCenterType, map: any) => {
  const marker = new window.kakao.maps.Marker({
    position: new window.kakao.maps.LatLng(center.latitude, center.longitude),
  });

  const content = `
    <div class="bg-blue-600 text-center relative -bottom-6 p-2 rounded">
      <p class="bg-blue-600 font-Pretendard text-white font-medium">${center.storNm}</p>
    </div>
  `;

  // 커스텀 오버레이 생성 함수입니다.
  const customOverlay = new window.kakao.maps.CustomOverlay({
    position: marker.getPosition(),
    content: content,
  });
  customOverlay.setMap(null);

  // 마커가 클릭됐을 때 해당하는 커스텀 오버레이를 보여줍니다.
  const clickMarker = () => (customOverlay.getMap() ? customOverlay.setMap(null) : customOverlay.setMap(map));

  // 지도가 클릭됐을때 생성된 커스텀 오버레이를 제거합니다.
  const clickMap = () => customOverlay.setMap(null);

  window.kakao.maps.event.addListener(marker, 'click', clickMarker);
  window.kakao.maps.event.addListener(map, 'click', clickMap);

  return { marker };
};

/**
 * 성능 최적화를 위해 클러스터러 생성 유틸을 추가했습니다.
 */
export const createMarkerClusterer = (map: any, markers: any[]) => {
  const clusterer = new window.kakao.maps.MarkerClusterer({
    map: map,
    averageCenter: true,
    minLevel: 7,
    disableClickZoom: true,
  });

  clusterer.addMarkers(markers.map((m) => m.marker));
  return clusterer;
};
