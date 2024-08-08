import axios from 'axios';

export const newsInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_NEWS_URL,
  headers: {
    'X-Naver-Client-Id': process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
    'X-Naver-Client-Secret': process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET,
  },
});

export const weatherInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_WEATHER_URL,
});

export const localInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_LOCAL_URL,
  headers: {
    Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}`,
  },
});
