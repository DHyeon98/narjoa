import NewsIntroduce from '@/components/introduce/news-introduce/news-introduce';
import SafetyCenterIntroduce from '@/components/introduce/safety-center-introduce/safety-center-introduce';
import WeatherIntroduce from '@/components/introduce/weather-introduce/weather-introduce';
import Link from 'next/link';

/**
 * 홈페이지 소개 페이지 입니다.
 * 홈페이지 소개 관련 컴포넌트와 메인 페이지로 이동할 수 있는 버튼으로 구성되어 있습니다.
 */
export default function IntroducePage() {
  return (
    <main className="layout-container">
      <section className="py-14 max-md:py-10">
        <h2 className="text-2xl font-bold text-center">
          <span className="inline-block pb-4 border-b-4">홈페이지 소개</span>
        </h2>
      </section>
      <div className="flex flex-col gap-6">
        <WeatherIntroduce />
        <div className="flex gap-6 max-lg:flex-col">
          <SafetyCenterIntroduce />
          <NewsIntroduce />
        </div>
      </div>
      <section className="flex-center py-14 max-md:py-10">
        <Link className="link-button py-3 px-6" href={'/'}>
          메인페이지로 이동
        </Link>
      </section>
    </main>
  );
}
