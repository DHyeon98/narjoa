import { newsInstance } from '../instance';

export const getNews = async (area: string, pageNum = 1) => {
  try {
    const response = await newsInstance.get(`/v1/search/news.json?query=${area} 범죄&display=5&start=${pageNum}`);
    const data = response.data;
    return data;
  } catch {
    console.log('에러');
  }
};
