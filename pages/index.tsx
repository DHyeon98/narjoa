import IntroductionLink from '@/components/introduction-link/introduction-link';
import News from '@/components/news/news';
import SafetyCenter from '@/components/safety-center/safety-center';
import Weather from '@/components/weather/weather';
import { LocationType } from '@/types/local';
import { useEffect, useState } from 'react';

export default function Home() {
  const [location, setLocation] = useState<LocationType>({ lat: 37.294855, lng: 126.922385 });

  const handleChangeLocation = (lat: number, lng: number) => {
    setLocation({ lat: lat, lng: lng });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({ lat: position.coords.latitude, lng: position.coords.longitude });
    });
  }, []);

  return (
    <main>
      <Weather location={location} handleChangeLocation={handleChangeLocation} />
      <SafetyCenter location={location} />
      <News location={location} />
      <IntroductionLink />
    </main>
  );
}
