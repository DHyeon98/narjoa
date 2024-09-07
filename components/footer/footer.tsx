import GithubSVG from '@/public/images/github.svg';
import VelogSVG from '@/public/images/velog.svg';
import DhyeonSVG from '@/public/images/dhyeon98_logo.svg';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-8 bg-neutral-600">
      <div className="layout-container h-full flex justify-center items-center flex-col">
        <div className="w-14 h-14">
          <DhyeonSVG width="100%" height="100%" fill="#fff" />
        </div>
        <ul className="flex gap-3 py-5 w-4/5 justify-center border-b border-gray-300">
          <li>
            <Link className="block w-8 h-8 rounded-full overflow-hidden" href={'https://github.com/DHyeon98'}>
              <GithubSVG width="100%" height="100%" fill="#fff" />
            </Link>
          </li>
          <li>
            <Link className="block w-8 h-8 rounded-full overflow-hidden" href={'https://velog.io/@d_hyeon/posts'}>
              <VelogSVG width="100%" height="100%" fill="#fff" />
            </Link>
          </li>
        </ul>
        <p className="text-white text-xs pt-5">&#169;2024 DHyeon98. All rights reserved</p>
      </div>
    </footer>
  );
}
