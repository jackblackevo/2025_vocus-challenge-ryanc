import type { Article } from './types';
import { API_ENDPOINT } from '../../lib/constants';

interface ArticlesResponse {
  articles: Article[];
  count: number;
}

export const getArticles = ({
  authorId,
  page,
  num,
}: {
  authorId: string;
  page: number;
  num: number;
}) =>
  fetch(
    `${API_ENDPOINT}/api/articles?userId=${authorId}&page=${page}&num=${num}`,
  ).then<ArticlesResponse>((res) => res.json());
