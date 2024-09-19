// import { useGetLocalQuery } from '@/hooks/queries/local';
import SnipeSVG from '@/public/images/snipe.svg';
import { HandleLocationType } from '../weather';
import { useGetLocalQuery } from '@/hooks/queries/local';

/**
 * 설정한 위치 값을 장소명으로 변환하는 컴포넌트 입니다.
 */
export default function CurrentLocate({
  location,
  handleSetLocation,
}: Omit<HandleLocationType, 'handleChangeLocation'>) {
  const { data } = useGetLocalQuery(location.lat, location.lng);
  const locateName = data ? data : '알수없음';
  return (
    <div className="flex items-center gap-2">
      <h2 className="font-Pretendard font-bold text-2xl">{locateName}</h2>
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
