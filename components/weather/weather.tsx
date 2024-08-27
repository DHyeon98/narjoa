import { useGetLocalQuery } from '@/hooks/queries/local';
import WeatherChart from './weather-chart/weather-chart';
import WeatherCard from './weather-card/weather-card';
import { Location } from '@/types/local';
import SelectLocationMap from '../kakao-map/select-location-map/select-location-map';

export default function Weather({ location }: Location) {
  const { data } = useGetLocalQuery(location.lat, location.lng);
  return (
    <section className="flex flex-col gap-3">
      <h2 className="font-Pretendard font-bold">{data}</h2>
      <div className="flex flex-grow gap-4 items-end">
        <div className="w-1/4 h-52 bg-slate-300">
          <SelectLocationMap location={location} />
        </div>
        <article className="w-1/4">
          <WeatherCard location={location} />
        </article>
        <article className="w-2/4">
          <WeatherChart location={location} />
        </article>
      </div>
    </section>
  );
}
