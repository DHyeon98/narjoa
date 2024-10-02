import { getLocal } from '@/apis/local';
import { getWeather } from '@/apis/weather';
import IntroductionLink from '@/components/introduction-link/introduction-link';
import News from '@/components/news/news';
import SafetyCenter from '@/components/safety-center/safety-center';
import Weather from '@/components/weather/weather';
import { LocationType } from '@/types/local';
import Head from 'next/head';
import { startTransition, useEffect, useState } from 'react';

export async function getServerSideProps() {
  try {
    const weatherData = await getWeather(37.56100278, 126.9996417);
    const localeData = await getLocal(126.9996417, 37.56100278);
    return {
      props: {
        initialData: {
          weatherData,
          localeData,
        },
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

export default function Home({ initialData }: any) {
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
          initialData={initialData}
        />
        <SafetyCenter location={location} />
        <div className="min-h-[400px] flex-center">
          <News location={location} initialData={initialData.localeData} />
        </div>
        <IntroductionLink />
      </main>
    </>
  );
}
