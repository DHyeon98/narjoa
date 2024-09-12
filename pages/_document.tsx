import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <meta name="google-site-verification" content="ePj7IAkccvdg1YLE8puYXJ7cQdcTALN88DEDokItGew" />
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <meta name="description" content="사용자 주변의 날씨와 지킴이집, 범죄 기사들을 제공하는 사이트 압니다." />
        <meta name="keywords" content="날씨, 지킴이집, 범죄, 여성, 안전, 날조아, NARJOA, narjoa" />
        <script
          type="text/javascript"
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY}&libraries=clusterer`}
        ></script>
        <title>날조아 | 날이 좋은 하루, 안전한 오늘</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
