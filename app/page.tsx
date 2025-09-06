import type { Metadata } from 'next';
import { getArticles } from '../features/articles/apis';
import ArticleList from '../features/articles/components/ArticleList';

const AUTHOR_ID = '601aa114fd89780001d24d4d';

export async function generateMetadata(): Promise<Metadata> {
  const response = await getArticles({ authorId: AUTHOR_ID, page: 1, num: 1 });
  const article = response.articles.at(0);

  return {
    title: article?.title,
    description: article?.abstract,
    openGraph: {
      title: article?.title,
      description: article?.abstract,
      images: article?.thumbnailUrl,
    },
  };
}

export default async function Home() {
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

  return <ArticleList articles={articles} />;
}
