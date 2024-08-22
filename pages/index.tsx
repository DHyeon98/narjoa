import KakaoMap from '@/components/kakao-map/kakao-map';
import WeatherCard from '@/components/weather-card/weather-card';
import WeatherChart from '@/components/weather-chart/weather-chart';
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
    <main className="px-4">
      <WeatherCard location={location} />
      <WeatherChart />
      <section className="pt-2 h-[512px]">
        <KakaoMap location={location} />
      </section>
    </main>
  );
}
