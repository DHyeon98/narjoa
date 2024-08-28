import { Location } from '@/types/local';
import { useEffect, useRef, useState } from 'react';

export default function SelectLocationMap({ location }: Location) {
  const selectLocationMapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);
  const [visible, setVisible] = useState(true);
  const [marker, setMarker] = useState<any>(null);

  useEffect(() => {
    if (!window.kakao) return;

    const container = selectLocationMapRef.current;
    const options = {
      center: new window.kakao.maps.LatLng(location.lat, location.lng),
      level: 15,
      scrollwheel: false,
      disableDoubleClickZoom: true,
    };
    const newMap = new window.kakao.maps.Map(container, options);
    setMap(newMap);

    const markerPosition = new window.kakao.maps.LatLng(location.lat, location.lng);

    const newMarker = new window.kakao.maps.Marker({
      position: markerPosition,
      map: newMap,
    });
    setMarker(newMarker);
  }, []);

  useEffect(() => {
    if (map && location) {
      const moveLatLon = new window.kakao.maps.LatLng(location.lat, location.lng);
      map.setCenter(moveLatLon);

      marker.setPosition(moveLatLon);

      const clickListener = window.kakao.maps.event.addListener(map, 'click', (mouseEvent: any) => {
        const latlng = mouseEvent.latLng;
        marker.setPosition(latlng);
      });

      return () => {
        window.kakao.maps.event.removeListener(map, 'click', clickListener);
      };
    }
  }, [location, map]);
  return (
    <div className="w-1/4 h-52 bg-slate-300 relative">
      <div className="h-full">
        <div ref={selectLocationMapRef} style={{ width: '100%', height: '100%' }} />
      </div>
      {visible && (
        <button
          type="button"
          onClick={() => setVisible(false)}
          className="z-10 flex justify-center items-center w-full h-full absolute left-0 top-0 bg-black bg-opacity-70"
        >
          <p className="text-white text-center">
            지도를 클릭해서 위치를 <br /> 설정해보세요!
          </p>
        </button>
      )}
    </div>
  );
}
