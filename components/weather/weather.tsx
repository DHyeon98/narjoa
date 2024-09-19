import WeatherCard from './weather-card/weather-card';
import { LocationType } from '@/types/local';
import SelectLocationMap from '../kakao-map/select-location-map/select-location-map';
import WeatherTable from './wearher-table/weather-table';
import CurrentLocate from './current-locate/current-locate';

export interface HandleLocationType {
  location: LocationType;
  handleChangeLocation: (lat: number, lng: number) => void;
  handleSetLocation: () => void;
}

/**
 * 날씨 관련 컴포넌트들로 구성되어 있습니다.
 */
export default function Weather({ location, handleChangeLocation, handleSetLocation }: HandleLocationType) {
  return (
    <section className="flex flex-col gap-3 layout-container py-14">
      <CurrentLocate location={location} handleSetLocation={handleSetLocation} />
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
