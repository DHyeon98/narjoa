import NewsIntroduce from '@/components/introduce/news-introduce/news-introduce';
import SafetyCenterIntroduce from '@/components/introduce/safety-center-introduce/safety-center-introduce';
import WeatherIntroduce from '@/components/introduce/weather-introduce/weather-introduce';

export default function IntroducePage() {
  return (
    <main className="layout-container pb-14">
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
    </main>
  );
}
