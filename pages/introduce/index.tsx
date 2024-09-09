import SafetyCenterIntroduce from '@/components/introduce/safety-center-introduce/safety-center-introduce';
import WeatherIntroduce from '@/components/introduce/weather-introduce/weather-introduce';

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
        <SafetyCenterIntroduce />
        <section>
          3. 주위 범죄 관련 기사 - 지정한 위치의 로컬 장소 명으로 범죄 관련 기사 받아옴 - 검색 키워드는 "장소 명" +
          "범죄"로 설정 - 프리패칭을 통해 더욱 빠른 사용자 반응
        </section>
      </div>
    </main>
  );
}
