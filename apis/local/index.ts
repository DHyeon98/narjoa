import { localInstance } from '../instance';

export const getLocal = async (xValue: number, yValue: number) => {
  try {
    const response = await localInstance.get(`coord2address.json?x=${xValue}&y=${yValue}`);
    const data = response.data;
    return data.documents[0].address.region_2depth_name;
  } catch {
    throw new Error('주소 정보를 가져오는 도중 오류가 발생했습니다.');
  }
};
