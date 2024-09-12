import { weatherInstance } from '../instance';

export interface WeatherArgumentType {
  lat: string;
  lng: string;
}

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
