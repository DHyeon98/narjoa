import { v4 as uuidv4 } from 'uuid';
import NewsItem from '../news-item/news-item';
import { News } from '@/types/news';

interface NewsListType {
  newsData: News[];
}

export default function NewsList({ newsData }: NewsListType) {
  return (
    <ul className="w-3/5">
      {newsData.map((item: News) => {
        const uniqueKey = uuidv4();
        return (
          <li key={uniqueKey} className="border-b border-slate-200 py-4">
            <NewsItem newsData={item} />
          </li>
        );
      })}
    </ul>
  );
}
