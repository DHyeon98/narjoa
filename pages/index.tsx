import IntroductionLink from '@/components/introduction-link/introduction-link';
import News from '@/components/news/news';
import SafetyCenter from '@/components/safety-center/safety-center';
import Weather from '@/components/weather/weather';
import { LocationType } from '@/types/local';
import { useEffect, useState } from 'react';

export default function Home() {
  const [location, setLocation] = useState<LocationType>({ lat: 37.56100278, lng: 126.9996417 });

  const handleChangeLocation = (lat: number, lng: number) => {
    setLocation({ lat: lat, lng: lng });
  };

  const handleSetLocation = () =>
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({ lat: position.coords.latitude, lng: position.coords.longitude });
    });

  useEffect(() => {
    handleSetLocation();
  }, []);

  return (
    <main>
      <Weather handleSetLocation={handleSetLocation} location={location} handleChangeLocation={handleChangeLocation} />
      <SafetyCenter location={location} />
      <News location={location} />
      <IntroductionLink />
    </main>
  );
}
