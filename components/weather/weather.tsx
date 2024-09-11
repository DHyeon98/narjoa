import { useGetLocalQuery } from '@/hooks/queries/local';
import WeatherCard from './weather-card/weather-card';
import { LocationType } from '@/types/local';
import SelectLocationMap from '../kakao-map/select-location-map/select-location-map';
import WeatherTable from './wearher-table/weather-table';

export interface HandleLocationType {
  location: LocationType;
  handleChangeLocation: (lat: number, lng: number) => void;
}

export default function Weather({ location, handleChangeLocation }: HandleLocationType) {
  const { data } = useGetLocalQuery(location.lat, location.lng);
  return (
    <section className="flex flex-col gap-3 layout-container py-14">
      <h2 className="font-Pretendard font-bold text-2xl">{data}</h2>
      <div className="flex flex-grow gap-4 max-lg:flex-wrap">
        <div className="flex gap-4 lg:w-1/2 w-full max-md:flex-col">
          <SelectLocationMap location={location} handleChangeLocation={handleChangeLocation} />
          <article className="w-[340px] flex-shrink-0 max-lg:w-1/2 max-md:w-full">
            <WeatherCard location={location} />
          </article>
        </div>
        <article className="w-1/2 max-lg:w-full">
          <WeatherTable location={location} />
        </article>
      </div>
    </section>
  );
}
