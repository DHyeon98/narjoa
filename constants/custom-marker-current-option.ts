import { LocationType } from '@/types/local';

export const customMarkerOption = (map: any, location: LocationType) => {
  const marker = {
    map,
    location,
    size: {
      width: 30,
      height: 30,
    },
    position: {
      x: 16,
      y: 20,
    },
  };
  return marker;
};
