import axios from 'axios';

export interface SafeCenterType {
  storNm: string;
  ctprvnNm: string;
  signguNm: string;
  signguCode: string;
  rdnmadr: string;
  lnmadr: string;
  latitude: string;
  longitude: string;
  phoneNumber: string;
  cmptncPolcsttnNm: string;
  appnYear: string;
  useYn: string;
  referenceDate: Date;
  instt_code: string;
  instt_name: string;
}

export const getSafeCenter = async () => {
  try {
    const response = await axios.get(`/json/safety-center.json`);
    return response.data;
  } catch {
    throw new Error('데이터를 가져오는 중 오류가 발생했습니다 ');
  }
};
