'use client';

import styled from 'styled-components';
import Image from 'next/image';
import { BREAKPOINTS } from '../../../lib/constants';
import HeartIcon from './HeartIcon';
import BookmarkIcon from './BookmarkIcon';

const Container = styled.div`
  padding-bottom: 20px;

  background-color: #ffffff;

  @media (min-width: ${BREAKPOINTS.md}px) {
    max-width: 481px;

    border: 1px solid #cbc3c2;
    border-radius: 6px;

    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.0838);

    padding: 16px 20px;
  }
`;

const Main = styled.div`
  display: flex;
  gap: 29px;
`;

const Title = styled.h2`
  margin: unset;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  font-size: 1.6rem;
  line-height: 1.9rem;
  color: #222222;

  @media (min-width: ${BREAKPOINTS.md}px) {
    font-size: 1.8rem;
    line-height: 2.7rem;
  }
`;

const Abstract = styled.p`
  margin: 5px 0 0;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  font-size: 1.4rem;
  line-height: 2.05rem;
  color: #665e5c;

  @media (min-width: ${BREAKPOINTS.md}px) {
    margin: 15px 0 0;

    font-size: 1.6rem;
    line-height: 2.7rem;
  }
`;

const CoverWrapper = styled.div`
  flex: 0 0 auto;

  position: relative;

  width: 100px;
  height: 52.5px;

  @media (min-width: ${BREAKPOINTS.md}px) {
    width: 110px;
    height: 57.75px;
  }
`;

const Cover = styled(Image)`
  border-radius: 3px;

  object-fit: cover;
`;

const Info = styled.div`
  margin-top: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled(Image)`
  border-radius: 50%;
`;

const Name = styled.span`
  margin-left: 7px;

  font-size: 1.3rem;
  line-height: 1;
  color: #222222;
`;

const Extra = styled.div`
  display: flex;
  gap: 10px;
`;

const CountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

const Count = styled.span`
  font-size: 1.2rem;
  line-height: 1;
  color: #665e5c;
`;

interface Props {
  title: string;
  abstract: string;
  thumbnailUrl: string;
  collectCount: number;
  likeCount: number;
  author: {
    fullname: string;
    avatarUrl: string;
  };
  className?: string;
}

const ArticleCard = ({
  title,
  abstract,
  thumbnailUrl,
  collectCount,
  likeCount,
  author,
  className,
}: Props) => {
  return (
    <Container className={className}>
      <Main>
        <div>
          <Title>{title}</Title>
          <Abstract>{abstract}</Abstract>
        </div>
        <CoverWrapper>
          <Cover
            src={thumbnailUrl}
            alt={`${title}'s cover`}
            fill
            sizes={`(min-width: ${BREAKPOINTS.md}) 110px, 100px`}
          />
        </CoverWrapper>
      </Main>
      <Info>
        <Author>
          <Avatar
            src={author.avatarUrl}
            alt={`${author.fullname}'s avatar`}
            width={29.86}
            height={29.86}
          />
          <Name>{author.fullname}</Name>
        </Author>
        <Extra>
          <CountContainer>
            <HeartIcon />
            <Count>{likeCount}</Count>
          </CountContainer>
          <CountContainer>
            <BookmarkIcon />
            {collectCount > 0 && <Count>{collectCount}</Count>}
          </CountContainer>
        </Extra>
      </Info>
    </Container>
  );
};

export default ArticleCard;
