import KakaoMap from '@/components/kakao-map/kakao-map';
import Weather from '@/components/weather/weather';
import { useEffect, useState } from 'react';

export interface LocationType {
  lat: number;
  lng: number;
}

export default function Home() {
  const [location, setLocation] = useState<LocationType>({ lat: 37.294855, lng: 126.922385 });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({ lat: position.coords.latitude, lng: position.coords.longitude });
    });
  }, []);

  return (
    <main className="px-4 pt-8 layout-container">
      <Weather location={location} />
      <section className="pt-2 h-[512px]">
        <KakaoMap location={location} />
      </section>
    </main>
  );
}
