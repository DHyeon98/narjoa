// import { useGetLocalQuery } from '@/hooks/queries/local';
import SnipeSVG from '@/public/images/snipe.svg';
import { HandleLocationType } from '../weather';
import { useGetLocalQuery } from '@/hooks/queries/local';

export default function CurrentLocate({
  location,
  handleSetLocation,
}: Omit<HandleLocationType, 'handleChangeLocation'>) {
  const { data } = useGetLocalQuery(location.lat, location.lng);
  return (
    <div className="flex items-center gap-2">
      <h2 className="font-Pretendard font-bold text-2xl">{data}</h2>
      <button
        type="button"
        className="w-5 h-5 hover:fill-red-600"
        onClick={handleSetLocation}
        title="클릭시 현재 사용자 위치로 변경됩니다."
      >
        <SnipeSVG width="100%" height="100%" viewBox="0 0 512.000000 512.000000" aria-label="사용자 위치 추적 아이콘" />
      </button>
    </div>
  );
}
