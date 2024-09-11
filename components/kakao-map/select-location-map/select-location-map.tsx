import { HandleLocationType } from '@/components/weather/weather';
import { useCustomMarker } from '@/hooks/custom-marker/use-custom-marker';
import { useEffect, useRef, useState } from 'react';

export default function SelectLocationMap({
  location,
  handleChangeLocation,
}: Omit<HandleLocationType, 'handleSetLocation'>) {
  const selectLocationMapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);
  const [visible, setVisible] = useState(true);
  const customMarkerOption = {
    map: map,
    location: location,
    size: {
      width: 30,
      height: 30,
    },
    position: {
      x: 16,
      y: 20,
    },
  };
  const customMarker = useCustomMarker(customMarkerOption);

  useEffect(() => {
    if (!window.kakao) return;

    const container = selectLocationMapRef.current;
    const options = {
      center: new window.kakao.maps.LatLng(location.lat, location.lng),
      level: 15,
    };
    const newMap = new window.kakao.maps.Map(container, options);
    setMap(newMap);
  }, []);

  useEffect(() => {
    if (map && location && customMarker) {
      const moveLatLon = new window.kakao.maps.LatLng(location.lat, location.lng);
      map.setCenter(moveLatLon);

      const clickListener = window.kakao.maps.event.addListener(map, 'click', (mouseEvent: any) => {
        const latlng = mouseEvent.latLng;
        handleChangeLocation(latlng.getLat(), latlng.getLng());

        customMarker.setPosition(latlng);
      });

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
