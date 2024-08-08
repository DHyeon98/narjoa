import { weatherInstance } from '../instance';

interface weatherArgumentType {
  date: number;
  time: number;
  xValue: number;
  yValue: number;
}

export const getWeather = async (argumentData: weatherArgumentType) => {
  const { date, time, xValue, yValue } = argumentData;
  try {
    const response = await weatherInstance.get(
      `&base_date=${date}&base_time=${time}&nx=${xValue}&ny=${yValue}&dataType=JSON`,
    );
    const data = response.data;
    return data;
  } catch {
    console.log('에러');
  }
};
