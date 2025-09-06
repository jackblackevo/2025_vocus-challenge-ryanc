'use client';

import styled from 'styled-components';
import { BREAKPOINTS } from '../../../lib/constants';
import type { Article } from '../types';
import ArticleCard from './ArticleCard';

const Wrapper = styled.div`
  @media (min-width: ${BREAKPOINTS.md}px) {
    padding-top: 70px;

    height: 100vh;

    background-color: #f9f7f5;
  }
`;

const Container = styled.div`
  padding: 28px 20px;

  @media (min-width: ${BREAKPOINTS.md}px) {
    margin: 0 auto;
    padding: unset;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 21px 25px;

    width: 95%;
    max-width: fit-content;
  }
`;

const StyledArticleCard = styled(ArticleCard)`
  &:not(:first-child) {
    margin-top: 20px;
  }

  &:not(:last-child) {
    border-bottom: 1px solid rgba(203, 195, 194, 1);
  }

  @media (min-width: ${BREAKPOINTS.md}px) {
    &:not(:first-child) {
      margin: unset;
    }
  }
`;

interface Props {
  articles: Article[];
}

const ArticleList = ({ articles }: Props) => (
  <Wrapper>
    <Container>
      {articles.map(
        ({
          _id,
          title,
          abstract,
          thumbnailUrl,
          collectCount,
          likeCount,
          user,
        }) => (
          <StyledArticleCard
            key={_id}
            title={title}
            abstract={abstract}
            thumbnailUrl={thumbnailUrl}
            collectCount={collectCount}
            likeCount={likeCount}
            author={user}
          />
        ),
      )}
    </Container>
  </Wrapper>
);

export default ArticleList;
