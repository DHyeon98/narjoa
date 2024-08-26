import { useGetLocalQuery } from '@/hooks/queries/local';
import { LocationType } from '@/pages';
import WeatherChart from './weather-chart/weather-chart';
import WeatherCard from './weather-card/weather-card';

interface WeatherCardType {
  location: LocationType;
}

export default function Weather({ location }: WeatherCardType) {
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
