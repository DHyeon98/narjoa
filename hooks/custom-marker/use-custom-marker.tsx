import { LocationType } from '@/types/local';
import { useEffect, useState } from 'react';

interface CustomMarkerType {
  map: any;
  location: LocationType;
  size: {
    width: number;
    height: number;
  };
  position: {
    x: number;
    y: number;
  };
}

export function useCustomMarker(markerOption: CustomMarkerType) {
  const { map, location, size, position } = markerOption;
  const [customMarker, setCustomMarker] = useState<any>(null);

  useEffect(() => {
    if (!window.kakao || !map) return;

    const imageSrc = 'https://cdn.icon-icons.com/icons2/317/PNG/512/map-marker-icon_34392.png';
    const imageSize = new window.kakao.maps.Size(size.width, size.height);
    const imageOption = { offset: new window.kakao.maps.Point(position.x, position.y) };

    const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
    const newMarkerPosition = new window.kakao.maps.LatLng(location.lat, location.lng);

    const newMarker = new window.kakao.maps.Marker({
      position: newMarkerPosition,
      image: markerImage,
      map: map,
    });

    newMarker.setImage(new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption));

    setCustomMarker(newMarker);

    return () => {
      newMarker.setMap(null);
    };
  }, [map, location]);

  return customMarker;
}
