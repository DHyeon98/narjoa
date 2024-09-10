import LogoSvg from '@/public/images/logo.svg';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="shadow-md">
      <div className="layout-container">
        <h1>
          <Link className="inline-block" href={'/'}>
            <LogoSvg width="150" viewBox="0 0 200 75" aria-label="메인 로고 (홈으로 이동)" />
          </Link>
        </h1>
      </div>
    </header>
  );
}
