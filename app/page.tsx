import type { Metadata } from 'next';
import { getArticles } from '../features/articles/apis';

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

export default function Home() {
  return <div>Hello World!</div>;
}
