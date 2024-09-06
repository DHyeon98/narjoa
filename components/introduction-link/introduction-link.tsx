import Link from 'next/link';
import LongArrowSVG from '@/public/images/long_arrow.svg';

export default function IntroductionLink() {
  return (
    <section className="py-14 bg-slate-50">
      <article className="layout-container">
        <h2>홈페이지에 대해 궁금하신가요?</h2>
        <p>소개 페이지로 이동해서 더 자세히 알아보세요.</p>
        <span className="flex">
          <Link
            href={'/introduce'}
            className="flex items-center gap-1 justify-center bg-slate-900 text-white py-1 px-3"
          >
            소개 페이지 이동
            <LongArrowSVG fill="#fff" />
          </Link>
        </span>
      </article>
    </section>
  );
}
