import Image from 'next/image';
import SafetyImage from '@/public/images/introduce/safety-center-marker.png';

export default function SafetyCenterIntroduce() {
  return (
    <section className="introduce-bg w-1/2">
      <h3 className="text-center text-xl font-bold mb-8">2. 여성안심지킴이집 위치 제공</h3>
      <div className="bg-white p-8 rounded-2xl">
        <div>
          <Image src={SafetyImage} alt="여성안심지킴이집 지도" />
        </div>
        <div className="break-keep mt-3">
          <strong className="inline-block text-lg mb-1">주변 여성안심지킴이집 위치를 제공합니다.</strong>
          <p>전국 여성안심지킴이집의 데이터를 반영하여 사용자가 설정한 위치 주변의 지킴이집의 위치를 제공합니다.</p>
          <p>빨간색 마커는 사용자의 현재 위치 또는 설정한 위치이고, 파란색 마커는 지킴이집의 위치입니다.</p>
          <p>마커를 클릭해서 지킴이집의 장소 명을 확인할 수 있습니다.</p>
        </div>
      </div>
    </section>
  );
}
