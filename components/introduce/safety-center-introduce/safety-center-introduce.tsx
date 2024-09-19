import Image from 'next/image';
import SafetyImage from '@/public/images/introduce/safety-center-marker.png';
import IntroduceSectionCard from '../introduce-section-card/introduce-section-card';

/**
 * 여성안심지킴이집 위치 제공 서비스를 소개하는 컴포넌트 입니다.
 */
export default function SafetyCenterIntroduce() {
  return (
    <IntroduceSectionCard title="2. 여성안심지킴이집 위치 제공">
      <IntroduceSectionCard.ImageBox>
        <Image className="w-full h-full object-cover" src={SafetyImage} alt="여성안심지킴이집 지도" />
      </IntroduceSectionCard.ImageBox>
      <IntroduceSectionCard.TextBox title="사용자 주변 여성안심지킴이집 위치를 제공합니다.">
        <p>전국 여성안심지킴이집의 데이터를 반영하여 사용자가 설정한 위치 주변의 지킴이집의 위치를 제공합니다.</p>
        <p>빨간색 마커는 사용자의 현재 위치 또는 설정한 위치이고, 파란색 마커는 지킴이집의 위치입니다.</p>
        <p>마커를 클릭해서 지킴이집의 장소 명을 확인할 수 있습니다.</p>
      </IntroduceSectionCard.TextBox>
    </IntroduceSectionCard>
  );
}
