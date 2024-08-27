import { Location } from '@/types/local';
import { useEffect, useState } from 'react';

export default function SelectLocationMap({ location }: Location) {
  const [map, setMap] = useState<any>(null);

  useEffect(() => {
    if (!window.kakao) return;

    const container = document.getElementById('selectMap');
    const options = {
      center: new window.kakao.maps.LatLng(location.lat, location.lng),
      level: 15,
      scrollwheel: false,
      disableDoubleClickZoom: true,
    };
    const newMap = new window.kakao.maps.Map(container, options);
    setMap(newMap);
  }, []);

  useEffect(() => {
    if (map && location) {
      const moveLatLon = new window.kakao.maps.LatLng(location.lat, location.lng);
      map.setCenter(moveLatLon);
    }
  }, [location, map]);
  return (
    <div className="h-full">
      <div id="selectMap" style={{ width: '100%', height: '100%' }} />
    </div>
  );
}
