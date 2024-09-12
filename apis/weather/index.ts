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
    console.log('에러');
  }
};
