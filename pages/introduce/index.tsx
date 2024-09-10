import NewsIntroduce from '@/components/introduce/news-introduce/news-introduce';
import SafetyCenterIntroduce from '@/components/introduce/safety-center-introduce/safety-center-introduce';
import WeatherIntroduce from '@/components/introduce/weather-introduce/weather-introduce';
import Link from 'next/link';

export default function IntroducePage() {
  return (
    <main className="layout-container">
      <section className="py-14">
        <h2 className="text-2xl font-bold text-center">
          <span className="inline-block pb-4 border-b-4">홈페이지 소개</span>
        </h2>
      </section>
      <div className="flex flex-col gap-6">
        <WeatherIntroduce />
        <div className="flex gap-6">
          <SafetyCenterIntroduce />
          <NewsIntroduce />
        </div>
      </div>
      <section className="flex-center py-14">
        <Link className="flex-center bg-slate-900 text-white py-3 px-6" href={'/'}>
          메인페이지로 이동
        </Link>
      </section>
    </main>
  );
}
