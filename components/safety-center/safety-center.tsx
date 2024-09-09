import { Location } from '@/types/local';
import SafetyCenterMap from '../kakao-map/safety-center-map/safety-center-map';

export default function SafetyCenter({ location }: Location) {
  return (
    <section className="py-14 bg-slate-50">
      <article className="layout-container flex-center gap-10 ">
        <div>
          <h2 className="font-bold text-3xl leading-relaxed">여성안심지킴이집이란?</h2>
          <p>
            위급상황 발생 시 안심지킴이집으로 대피하면
            <br /> 편의점 안심지킴이가 무선비상벨이나 무다이얼링으로
            <br /> 신고 후, 경찰이 신속하게 출동하는 시스템입니다.
          </p>
          <p className="mt-3 font-bold text-[#0c5cb1]">
            우리집, 연인, 가족의 위치를 설정하고,
            <br /> 가까이에 있는 안심지킴이집을 확인하세요!
          </p>
        </div>
        <SafetyCenterMap location={location} />
      </article>
    </section>
  );
}
