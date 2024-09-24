import { newsInstance } from '../instance';

export const getNews = async (area: string, pageNum = 1) => {
  try {
    const response = await newsInstance.get(`/v1/search/news.json?query=${area} 범죄&display=5&start=${pageNum}`);
    return response.data;
  } catch (error) {
    console.log(error);
    // throw new Error('뉴스 정보를 가져오는 중 오류가 발생했습니다.');
  }
};
