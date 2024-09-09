export default function IntroducePage() {
  return (
    <main>
      <section>홈페이지 소개</section>
      <section>1. 위치 설정 및 날씨 안내 - openweatherAPI, 카카오 지도, 카카오 로컬 api 사용</section>
      <section>
        2. 주위 여성안심지킴이집 안내 - 카카오 지도, 전국여성안심지킴이집 공공데이터 포털 api 사용 - 지정한 위치의
        위도와 경도 값을 받고 로컬 장소로 변경 - 지정한 위치 주변의 지킴이집을 마커로 표시, 마커를 클릭해서 지킴이집
        장소 명을 알 수 있음
      </section>
      <section>
        3. 주위 범죄 관련 기사 - 지정한 위치의 로컬 장소 명으로 범죄 관련 기사 받아옴 - 검색 키워드는 "장소 명" +
        "범죄"로 설정 - 프리패칭을 통해 더욱 빠른 사용자 반응
      </section>
    </main>
  );
}
