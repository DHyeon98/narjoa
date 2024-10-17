import { getLocal } from '@/apis/local';
import { getWeather } from '@/apis/weather';
import IntroductionLink from '@/components/introduction-link/introduction-link';
import News from '@/components/news/news';
import SafetyCenter from '@/components/safety-center/safety-center';
import Weather from '@/components/weather/weather';
import { useLocation } from '@/hooks/use-location';
import { dehydrate, DehydratedState, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { getCookie } from 'cookies-next';
import { NextPageContext } from 'next';
import Head from 'next/head';

interface MainPageType {
  dehydratedState: DehydratedState;
  latitude: number;
  longitude: number;
}

export async function getServerSideProps(context: NextPageContext) {
  const queryClient = new QueryClient();

  // cookies-next를 사용해 쿠키에서 lat과 lng 값 가져오기
  const lat = getCookie('lat', { req: context.req, res: context.res });
  const lng = getCookie('lng', { req: context.req, res: context.res });

  // 위도와 경도가 없을 경우 기본값 설정
  const latitude = lat ? parseFloat(lat as string) : 37.56100278;
  const longitude = lng ? parseFloat(lng as string) : 126.9996417;

  try {
    await Promise.all([
      queryClient.prefetchQuery({
        queryKey: ['weather', latitude, longitude],
        queryFn: () => getWeather(latitude, longitude),
      }),
      queryClient.prefetchQuery({
        queryKey: ['local', latitude, longitude],
        queryFn: () => getLocal(longitude, latitude),
      }),
    ]);
    return {
      props: {
        dehydratedState: dehydrate(queryClient),
        latitude,
        longitude,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      notFound: true,
    };
  }
}

export default function Home({ dehydratedState, latitude, longitude }: MainPageType) {
  const { location, handleChangeLocation, handleSetLocation } = useLocation(latitude, longitude);

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
