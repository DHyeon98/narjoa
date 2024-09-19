import { HandleLocationType } from '@/components/weather/weather';
import { useCustomMarker } from '@/hooks/use-custom-marker';
import { OutOfAreaVerification } from '@/utils/out-of-area-verification';
import { useEffect, useRef, useState } from 'react';

/**
 * 지도에서 위치를 변경할 수 있는 기능을 사용할 수 있습니다.
 * 지도를 불러오는 함수와 지도 관련 유틸로 구성되어 있습니다.
 */
export default function SelectLocationMap({
  location,
  handleChangeLocation,
}: Omit<HandleLocationType, 'handleSetLocation'>) {
  const selectLocationMapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);
  const [visible, setVisible] = useState(true);
  const customMarker = useCustomMarker(map, location);

  // 지도를 로드하는 함수 입니다.
  useEffect(() => {
    if (!window.kakao) return;
    window.kakao.maps.load(() => {
      const container = selectLocationMapRef.current;
      const options = {
        center: new window.kakao.maps.LatLng(location.lat, location.lng),
        level: 15,
      };
      const newMap = new window.kakao.maps.Map(container, options);
      setMap(newMap);
    });
  }, []);

  // 지도 유틸 관련 함수들 입니다.
  useEffect(() => {
    if (map && location && customMarker) {
      // location 값이 변했을 때 지도 중앙이 변하는 함수입니다.
      const moveLatLon = new window.kakao.maps.LatLng(location.lat, location.lng);
      map.setCenter(moveLatLon);

      // 대한민국 권외 지역을 클릭했을 때 경고문을 띄워주는 함수입니다.
      const clickListener = (mouseEvent: any) => {
        const latlng = mouseEvent.latLng;
        const lat = latlng.getLat();
        const lng = latlng.getLng();
        if (OutOfAreaVerification(lat, lng)) {
          handleChangeLocation(lat, lng);
          customMarker.setPosition(latlng);
        } else {
          alert('지원하지 않는 지역입니다.');
        }
      };
      window.kakao.maps.event.addListener(map, 'click', clickListener);
      return () => {
        window.kakao.maps.event.removeListener(map, 'click', clickListener);
      };
    }
  }, [location, map, customMarker]);
  return (
    <div className="w-1/2 h-[220px] bg-slate-300 relative max-md:w-full">
      <div className="h-full">
        <div ref={selectLocationMapRef} style={{ width: '100%', height: '100%' }} />
      </div>
      {visible && (
        <button
          type="button"
          onClick={() => setVisible(false)}
          className="z-10 flex-center w-full h-full absolute left-0 top-0 bg-black bg-opacity-70"
        >
          <p className="text-white text-center px-2 break-keep">
            지도를 클릭해서 위치를 <br /> 설정해보세요!
          </p>
        </button>
      )}
    </div>
  );
}
