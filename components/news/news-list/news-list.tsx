import { v4 as uuidv4 } from 'uuid';
import NewsItem from '../news-item/news-item';
import { News } from '@/types/news';

interface NewsListType {
  newsData: News[];
}

/**
 * 뉴스 리스트를 제공하는 컴포넌트 입니다.
 * 고유한 key를 위해 uuid 라이브러리를 사용했습니다.
 */
export default function NewsList({ newsData }: NewsListType) {
  return (
    <ul>
      {newsData.map((item: News) => {
        const uniqueKey = uuidv4();
        return (
          <li key={uniqueKey} className="border-b border-slate-200 py-4 max-md:py-2">
            <NewsItem newsData={item} />
          </li>
        );
      })}
    </ul>
  );
}
