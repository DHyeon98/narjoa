import { getLocal } from '@/apis/local';
import { getWeather } from '@/apis/weather';
import IntroductionLink from '@/components/introduction-link/introduction-link';
import News from '@/components/news/news';
import SafetyCenter from '@/components/safety-center/safety-center';
import Weather from '@/components/weather/weather';
import { LocationType } from '@/types/local';
import { dehydrate, DehydratedState, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import Head from 'next/head';
import { startTransition, useEffect, useState } from 'react';

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  try {
    await Promise.all([
      queryClient.prefetchQuery({
        queryKey: ['weather', 37.56100278, 126.9996417],
        queryFn: () => getWeather(37.56100278, 126.9996417),
        staleTime: 0,
      }),
      queryClient.prefetchQuery({
        queryKey: ['local', 37.56100278, 126.9996417],
        queryFn: () => getLocal(126.9996417, 37.56100278),
        staleTime: 0,
      }),
    ]);
    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      notFound: true,
    };
  }
}

export default function Home({ dehydratedState }: { dehydratedState: DehydratedState }) {
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
    <HydrationBoundary state={dehydratedState}>
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
          <News location={location} />
        </div>
        <IntroductionLink />
      </main>
    </HydrationBoundary>
  );
}
