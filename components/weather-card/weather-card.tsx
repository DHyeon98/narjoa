import { useGetLocalQuery } from '@/hooks/queries/local';
import { LocationType } from '@/pages';

interface WeatherCardType {
  location: LocationType;
}

export default function WeatherCard({ location }: WeatherCardType) {
  const { data } = useGetLocalQuery(location.lat, location.lng);
  return <div className="font-Pretendard font-bold">자동화 테스트5</div>;
}
