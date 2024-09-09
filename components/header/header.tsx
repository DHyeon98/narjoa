import LogoSvg from '@/public/images/logo.svg';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="shadow-md">
      <div className="layout-container">
        <h1>
          <Link href={'/'}>
            <LogoSvg width="150" viewBox="0 0 200 75" />
          </Link>
        </h1>
      </div>
    </header>
  );
}
