import { NextResponse } from 'next/server';

export default function middleware() {
  const response = NextResponse.next();
  response.cookies.set('lat', '37.56100278');
  response.cookies.set('lng', '126.9996417');
  return response;
}
