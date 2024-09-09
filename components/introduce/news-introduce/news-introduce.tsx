import Image from 'next/image';
import IntroduceSectionCard from '../introduce-section-card/introduce-section-card';
import NewsImage from '@/public/images/introduce/news.jpg';

export default function NewsIntroduce() {
  return (
    <IntroduceSectionCard title="3. 주변 범죄 관련 기사">
      <IntroduceSectionCard.ImageBox>
        <Image className="w-full h-full object-cover" src={NewsImage} alt="뉴스 관련 이미지" />
      </IntroduceSectionCard.ImageBox>
      <IntroduceSectionCard.TextBox title="사용자 주변 범죄 관련 기사를 제공합니다.">
        <p>사용자가 지정한 장소 명으로 범죄 관련 기사를 제공합니다.</p>
        <p>
          검색 키워드는 "장소 명" + "범죄" 입니다. <small>ex&#41; 강남구 범죄, 동대문구 범죄 등</small>
        </p>
        <p>다음 페이지의 내용을 미리 받아오는 프리패칭을 통해 빠른 로딩으로, 사용자 경험 향상을 제공합니다.</p>
      </IntroduceSectionCard.TextBox>
    </IntroduceSectionCard>
  );
}
