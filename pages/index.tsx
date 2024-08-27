import SafetyCenterMap from '@/components/kakao-map/safety-center-map/safety-center-map';
import Weather from '@/components/weather/weather';
import { LocationType } from '@/types/local';
import { useEffect, useState } from 'react';

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
        <SafetyCenterMap location={location} />
      </section>
    </main>
  );
}
