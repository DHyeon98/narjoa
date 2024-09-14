# 작성중
## Narjoa☀️
<img src="https://github.com/user-attachments/assets/26d7e92a-78c4-4c17-8f1f-4ff63eef1e1b" width=300/>

## 소개
- 날씨, 여성안심지킴이집, 범죄 관련 뉴스를 알 수 있는 반응형 홈페이지를 Next.js로 개발했습니다.

## 어플리케이션 링크
- https://narjoa.site/

## 기획의도
- tailwind, 차트, 웹접근성, SEO, 배포자동화, 도커 등 실무에서 자주 사용하는 기능을 적용해 보자는 취지에서 기획하였습니다.

## Skills

| FlatForms & Language |
| :-: |
| <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"> <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"><br/><img src="https://img.shields.io/badge/next-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"> <img src="https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white"> <img src="https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"><br/><img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">
 
## 주요 기능

### 1. 카카오맵 & 차트 활용
- 카카오맵과 Recharts를 활용하여 개발했습니다.<strong></strong>
- 카카오맵을 클릭해서 위치를 설정하거나, 지킴이집의 위치를 확인할 수 있는 마커를 표시하였습니다.
- Chart.js와 D3.js를 사용하지 않고 Recharts를 사용한 이유는 <strong>러닝 커브</strong>가 낮으며 <strong>커스텀</strong>이 쉽고, <strong>리액트 친화적인</strong> 라이브러리라 선택하였습니다.

### 2. Pre-Fetching
- TanStack Query의 주요 기능인 Pre-Fetching을 사용하였습니다.
- 페이지네이션은 사용자가 누를 확률이 높은 곳이기 때문에 Pre-Fetching을 사용하여 사용자 경험을 향상시켰습니다.

### 3. 배포 자동화
<img src="https://github.com/user-attachments/assets/2267caa9-a903-4b86-9a13-a1486253b5ce" width=500/>

- Github Action과 Docker, ec2를 활용한 배포 자동화로, 배포까지의 시간을 단축하였습니다.
- Workflow에서 타입과 빌드 테스트를 통과하면 Docker로 이미지를 푸시하고 ec2에서 Docker 배포를 하는 파이프라인을 구성하였습니다.

### 4. SEO (검색엔진 최적화), 웹 접근성
<img src="https://github.com/user-attachments/assets/45aaf302-4f2b-408f-8641-b404b72d7f3d" width=500 />

- 검색엔진 최적화를 위해 meta 태그와 시멘틱 태그 등 기본적인 웹 접근성을 지키면서 개발을 진행했습니다.
- 결과적으로 구글 상위에 랭크되었으며 위 사진에서 확인할 수 있습니다.

## 에러 처리

### Error-Boundary
- api 요청마다 에러 처리를 하여 어떤 요청이 실패가 되었는지 사용자가 알아볼 수 있도록 설계하였습니다.
- 카카오 맵의 경우, 대한민국 권외 클릭시 요청처리가 되지 않게 설계하였습니다. 
```
// 날씨 정보 요청
export const getWeather = async (lat: number, lng: number) => {
  try {
    const response = await weatherInstance.get(
      `onecall?lat=${lat}&lon=${lng}&exclude=minutely,alerts&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`,
    );
    return response.data;
  } catch {
    throw new Error('날씨 정보를 가져오는 중 오류가 발생했습니다.');
  }
};

// 전역 에러 바운더리
export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Component {...pageProps} />
      </ErrorBoundary>
      <Footer />
    </QueryClientProvider>
  );
}
```

## 트러블 슈팅
- [카카오맵 이동 시 렌더링 오류 해결](https://velog.io/@d_hyeon/카카오-지도-이동-시-렌더링-오류-해결)
