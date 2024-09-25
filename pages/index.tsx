import { getNews } from '@/apis/news';
import IntroductionLink from '@/components/introduction-link/introduction-link';
import News from '@/components/news/news';
import SafetyCenter from '@/components/safety-center/safety-center';
import { Spinner } from '@/components/spinner/spinner';
import Weather from '@/components/weather/weather';
import { LocationType } from '@/types/local';
import Head from 'next/head';
import { startTransition, Suspense, useEffect, useState } from 'react';

export default function Home() {
  const [location, setLocation] = useState<LocationType>({ lat: 37.56100278, lng: 126.9996417 });

  // 현재 위치를 변견하는 기능의 함수입니다.
  const handleChangeLocation = (lat: number, lng: number) => {
    startTransition(() => {
      setLocation({ lat, lng });
    });
  };

  // 현재 위치로 변경하는 기능의 함수입니다.
  const handleSetLocation = () =>
    navigator.geolocation.getCurrentPosition((position) => {
      handleChangeLocation(position.coords.latitude, position.coords.longitude);
    });

  // 페이지가 렌더링 될 때 현재 위치를 가져오는 코드입니다.
  useEffect(() => {
    handleSetLocation();
  }, []);

  return (
    <>
      <Head>
        <title>narjoa</title>
      </Head>
      <main>
        <Weather
          handleSetLocation={handleSetLocation}
          location={location}
          handleChangeLocation={handleChangeLocation}
        />
        <SafetyCenter location={location} />
        <div className="min-h-[400px] flex-center">
          <Suspense fallback={<Spinner />}>
            <News location={location} />
          </Suspense>
        </div>
        <IntroductionLink />
      </main>
    </>
  );
}
