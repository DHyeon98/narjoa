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
    console.log('에러');
  }
};
