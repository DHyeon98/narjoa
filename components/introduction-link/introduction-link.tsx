import Link from 'next/link';
import LongArrowSVG from '@/public/images/long_arrow.svg';
import IntroduceSVG from '@/public/images/introduce_section.svg';

export default function IntroductionLink() {
  return (
    <section className="py-14 bg-slate-50">
      <div className="layout-container h-[300px] flex-center gap-6">
        <article className="w-[300px] h-full">
          <IntroduceSVG width="100%" height="100%" viewBox="0 0 610.81982 489.57062" />
        </article>
        <article>
          <h2 className="font-bold text-xl">홈페이지에 대해 궁금하신가요?</h2>
          <p className="font-medium text-lg mb-8">소개 페이지로 이동해서 더 자세히 알아보세요.</p>
          <span className="flex">
            <Link href={'/introduce'} className="link-button gap-1 py-1 px-3">
              소개 페이지 이동
              <LongArrowSVG fill="#fff" />
            </Link>
          </span>
        </article>
      </div>
    </section>
  );
}
