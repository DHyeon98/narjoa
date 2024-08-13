// dfs_xy_conv.ts

// 지구 반경(km), 격자 간격(km), 투영 latitude, longitude 및 기준점 설정
const RE = 6371.00877;
const GRID = 5.0;
const SLAT1 = 30.0;
const SLAT2 = 60.0;
const OLON = 126.0;
const OLAT = 38.0;
const XO = 43;
const YO = 136;

const DEGRAD = Math.PI / 180.0;

interface Coordinates {
  x: number;
  y: number;
}

export function dfs_xy_conv(v1: number, v2: number): Coordinates {
  const re = RE / GRID;
  const slat1 = SLAT1 * DEGRAD;
  const slat2 = SLAT2 * DEGRAD;
  const olon = OLON * DEGRAD;
  const olat = OLAT * DEGRAD;

  let sn = Math.tan(Math.PI * 0.25 + slat2 * 0.5) / Math.tan(Math.PI * 0.25 + slat1 * 0.5);
  sn = Math.log(Math.cos(slat1) / Math.cos(slat2)) / Math.log(sn);

  let sf = Math.tan(Math.PI * 0.25 + slat1 * 0.5);
  sf = (Math.pow(sf, sn) * Math.cos(slat1)) / sn;

  let ro = Math.tan(Math.PI * 0.25 + olat * 0.5);
  ro = (re * sf) / Math.pow(ro, sn);

  let rs: Coordinates = {
    x: 0,
    y: 0,
  };

  const ra = Math.tan(Math.PI * 0.25 + v1 * DEGRAD * 0.5);
  const computedRa = (re * sf) / Math.pow(ra, sn);

  let theta = v2 * DEGRAD - olon;
  if (theta > Math.PI) theta -= 2.0 * Math.PI;
  if (theta < -Math.PI) theta += 2.0 * Math.PI;
  theta *= sn;

  rs.x = Math.floor(computedRa * Math.sin(theta) + XO + 0.5);
  rs.y = Math.floor(ro - computedRa * Math.cos(theta) + YO + 0.5);

  return rs;
}
