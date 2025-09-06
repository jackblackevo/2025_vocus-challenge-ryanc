import { cache } from 'react';
import type { Metadata } from 'next';
import { getArticles } from '../features/articles/apis';
import ArticleList from '../features/articles/components/ArticleList';

const AUTHOR_ID = '601aa114fd89780001d24d4d';

const getRandomFourArticles = cache(async () => {
  const { count: articleCount } = await getArticles({
    authorId: AUTHOR_ID,
    page: 1,
    num: 1,
  });

  const pageCount = Math.floor(articleCount / 4);
  const pageNum = Math.ceil(Math.random() * pageCount);

  const { articles } = await getArticles({
    authorId: AUTHOR_ID,
    page: pageNum,
    num: 4,
  });

  return articles;
});

export async function generateMetadata(): Promise<Metadata> {
  const articles = await getRandomFourArticles();
  const firstArticle = articles.at(0);

  return {
    title: firstArticle?.title,
    description: firstArticle?.abstract,
    openGraph: {
      title: firstArticle?.title,
      description: firstArticle?.abstract,
      images: firstArticle?.thumbnailUrl,
    },
  };
}

export default async function Home() {
  const articles = await getRandomFourArticles();

  return <ArticleList articles={articles} />;
}
