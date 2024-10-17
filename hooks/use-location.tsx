import { LocationType } from '@/types/local';
import { setCookie } from 'cookies-next';
import { startTransition, useState } from 'react';

export function useLocation(initialLat: number, initialLng: number) {
  const [location, setLocation] = useState<LocationType>({ lat: initialLat, lng: initialLng });

  const handleChangeLocation = (lat: number, lng: number) => {
    startTransition(() => {
      setLocation({ lat, lng });
      setCookie('lat', lat);
      setCookie('lng', lng);
    });
  };

  const handleSetLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        handleChangeLocation(position.coords.latitude, position.coords.longitude);
      },
      (error) => {
        if (error.code === error.PERMISSION_DENIED) {
          alert('위치 권한이 거부되었습니다.');
        }
      },
    );
  };

  return {
    location,
    handleChangeLocation,
    handleSetLocation,
  };
}
