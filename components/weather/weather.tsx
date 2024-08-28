import { useGetLocalQuery } from '@/hooks/queries/local';
import WeatherChart from './weather-chart/weather-chart';
import WeatherCard from './weather-card/weather-card';
import { LocationType } from '@/types/local';
import SelectLocationMap from '../kakao-map/select-location-map/select-location-map';

export interface HandleLocationType {
  location: LocationType;
  handleChangeLocation: (lat: number, lng: number) => void;
}

export default function Weather({ location, handleChangeLocation }: HandleLocationType) {
  const { data } = useGetLocalQuery(location.lat, location.lng);
  return (
    <section className="flex flex-col gap-3">
      <h2 className="font-Pretendard font-bold">{data}</h2>
      <div className="flex flex-grow gap-4 items-end">
        <SelectLocationMap location={location} handleChangeLocation={handleChangeLocation} />
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
