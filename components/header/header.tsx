import LogoSvg from '@/public/images/logo.svg';

export default function Header() {
  return (
    <header className="shadow-md">
      <div className="layout-container">
        <h1>
          <LogoSvg width="150" viewBox="0 0 200 75" />
        </h1>
      </div>
    </header>
  );
}
