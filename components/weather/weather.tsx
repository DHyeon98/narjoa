import { useGetLocalQuery } from '@/hooks/queries/local';
import WeatherCard from './weather-card/weather-card';
import { LocationType } from '@/types/local';
import SelectLocationMap from '../kakao-map/select-location-map/select-location-map';
import WeatherTable from './wearher-table/weather-table';
import SnipeSVG from '@/public/images/snipe.svg';

export interface HandleLocationType {
  location: LocationType;
  handleChangeLocation: (lat: number, lng: number) => void;
  handleSetLocation: () => void;
}

export default function Weather({ location, handleChangeLocation, handleSetLocation }: HandleLocationType) {
  const { data } = useGetLocalQuery(location.lat, location.lng);
  return (
    <section className="flex flex-col gap-3 layout-container py-14">
      <div className="flex items-center gap-2">
        <h2 className="font-Pretendard font-bold text-2xl">{data}</h2>
        <button
          type="button"
          className="w-5 h-5 hover:fill-red-600"
          onClick={handleSetLocation}
          title="클릭시 현재 사용자 위치로 변경됩니다."
        >
          <SnipeSVG
            width="100%"
            height="100%"
            viewBox="0 0 512.000000 512.000000"
            aria-label="사용자 위치 추적 아이콘"
          />
        </button>
      </div>
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
