import { useGetLocalQuery } from '@/hooks/queries/local';
import { LocationType } from '@/pages';
import WeatherChart from '../weather-chart/weather-chart';

interface WeatherCardType {
  location: LocationType;
}

export default function WeatherCard({ location }: WeatherCardType) {
  const { data } = useGetLocalQuery(location.lat, location.lng);
  return (
    <section className="flex flex-grow">
      <article className="w-1/2">
        <p className="font-Pretendard font-bold">{data}</p>
      </article>
      <article className="w-1/2">
        <WeatherChart location={location} />
      </article>
    </section>
  );
}
