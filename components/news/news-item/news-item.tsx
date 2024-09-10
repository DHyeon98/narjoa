import { News } from '@/types/news';
import { formatDate } from '@/utils/format-date';
import Link from 'next/link';

interface NewsItemType {
  newsData: News;
}

export default function NewsItem({ newsData }: NewsItemType) {
  const { title, description, link, pubDate } = newsData;
  return (
    <Link href={link} target="_blank" title="새창열림" className="flex flex-col gap-1 hover:underline">
      <h3 className="text-xl font-bold" dangerouslySetInnerHTML={{ __html: title }}></h3>
      <p dangerouslySetInnerHTML={{ __html: description }}></p>
      <p className="text-sm">{formatDate(pubDate)}</p>
    </Link>
  );
}
