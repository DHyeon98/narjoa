import { weatherInstance } from '../instance';

export interface WeatherArgumentType {
  lat: string;
  lng: string;
}

export const getWeather = async (lat: number, lng: number) => {
  try {
    const response = await weatherInstance.get(
      `onecall?lat=${lat}&ln=${lng}&exclude=minutely,alerts&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`,
    );
    const data = response.data;
    return data;
  } catch {
    console.log('에러');
  }
};
