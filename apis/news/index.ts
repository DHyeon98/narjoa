import { newsInstance } from '../instance';

export const getNews = async (area: string) => {
  try {
    const response = await newsInstance.get(`?query=${area} 범죄&sort=sim`);
    const data = response.data;
    return data;
  } catch {
    console.log('에러');
  }
};
