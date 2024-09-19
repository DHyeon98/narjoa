import { News } from '@/types/news';
import { formatDate } from '@/utils/format-date';
import Link from 'next/link';

interface NewsItemType {
  newsData: News;
}

/**
 * 뉴스의 내용들로 구성된 컴포넌트 입니다.
 * api 응답이 html 태그 그대로 오기 때문에 dangerouslySetInnerHTML 속성을 사용하여 렌더링 합니다.
 */
export default function NewsItem({ newsData }: NewsItemType) {
  const { title, description, link, pubDate } = newsData;
  return (
    <Link href={link} target="_blank" title="새창열림" className="flex flex-col gap-1 hover:underline">
      <h3 className="text-xl font-bold max-md:text-lg" dangerouslySetInnerHTML={{ __html: title }}></h3>
      <p className="max-md:text-sm" dangerouslySetInnerHTML={{ __html: description }}></p>
      <p className="text-xs">{formatDate(pubDate)}</p>
    </Link>
  );
}
