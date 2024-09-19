import DhyeonSVG from '@/public/images/dhyeon98_logo.svg';
import Link from 'next/link';
import { FOOTER_LINK_DATA } from '@/constants/footer-link';

/**
 * 푸터 컴포넌트 입니다.
 * 개발자 로고와 개발자 관련 블로그로 구성되어 있습니다.
 */
export default function Footer() {
  return (
    <footer className="py-8 bg-neutral-600 mt-auto">
      <div className="layout-container h-full flex-center flex-col">
        <div className="w-14 h-14">
          <DhyeonSVG width="100%" height="100%" fill="#fff" />
        </div>
        <ul className="flex gap-3 py-5 w-4/5 justify-center border-b border-gray-300">
          {FOOTER_LINK_DATA.map((data, index) => {
            return (
              <li key={index}>
                <Link
                  className="block w-8 h-8 rounded-full overflow-hidden transition-transform duration-300 hover:-translate-y-1"
                  href={data.href}
                  target="_blank"
                >
                  <data.IconComponent width="100%" height="100%" fill="#fff" aria-label={data.ariaLabel} />
                </Link>
              </li>
            );
          })}
        </ul>
        <p className="text-white text-xs pt-5">&#169;2024 DHyeon98. All rights reserved</p>
      </div>
    </footer>
  );
}
