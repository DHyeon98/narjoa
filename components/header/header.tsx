import LogoSvg from '@/public/images/logo.svg';
import Link from 'next/link';

/**
 * 헤더 컴포넌트 입니다.
 * 홈페이지의 로고와 메인 페이지 이동 버튼으로 구성되어있습니다.
 */
export default function Header() {
  return (
    <header className="shadow-md">
      <div className="layout-container">
        <h1 className="flex">
          <Link className="inline-block" href={'/'}>
            <LogoSvg width="150" viewBox="0 0 200 75" aria-label="메인 로고 (홈으로 이동)" />
            <span className="hid">날조아</span>
          </Link>
        </h1>
      </div>
    </header>
  );
}
