import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <meta name="google-site-verification" content="ePj7IAkccvdg1YLE8puYXJ7cQdcTALN88DEDokItGew" />
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <meta name="description" content="사용자 주변의 날씨와 지킴이집, 범죄 기사들을 제공하는 사이트 입니다." />
        <meta name="keywords" content="날씨, 지킴이집, 범죄, 여성, 안전, 날조아, NARJOA, narjoa" />
        <Script
          type="text/javascript"
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY}&libraries=clusterer`}
        ></Script>
        <title>narjoa</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
