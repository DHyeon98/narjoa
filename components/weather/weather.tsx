import { useGetLocalQuery } from '@/hooks/queries/local';
import WeatherChart from './weather-chart/weather-chart';
import WeatherCard from './weather-card/weather-card';
import { Location } from '@/types/local';

export default function Weather({ location }: Location) {
  const { data } = useGetLocalQuery(location.lat, location.lng);
  return (
    <section>
      <h2 className="font-Pretendard font-bold">{data}</h2>
      <div className="flex flex-grow gap-12">
        <article className="w-1/2">
          <WeatherCard location={location} />
        </article>
        <article className="w-1/2">
          <WeatherChart location={location} />
        </article>
      </div>
    </section>
  );
}
