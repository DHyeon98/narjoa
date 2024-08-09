import { weatherInstance } from '../instance';

export interface weatherArgumentType {
  date: string;
  time: string;
  xValue: number;
  yValue: number;
}

export const getWeather = async (argumentData: weatherArgumentType) => {
  const { date, time, xValue, yValue } = argumentData;
  try {
    const response = await weatherInstance.get(
      `getVilageFcst?serviceKey=${process.env.NEXT_PUBLIC_SERVICE_KEY}&base_date=${date}&base_time=${time}&nx=${xValue}&ny=${yValue}&dataType=JSON&numOfRows=50&pageNo=1`,
    );
    const data = response.data;
    return data;
  } catch {
    console.log('에러');
  }
};
