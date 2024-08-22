import { localInstance } from '../instance';

export const getLocal = async (xValue: number, yValue: number) => {
  try {
    const response = await localInstance.get(`coord2address.json?x=${xValue}&y=${yValue}`);
    const data = response.data;
    return data;
  } catch {
    console.log('에러');
  }
};
