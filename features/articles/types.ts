export interface Article {
  _id: string;
  title: string;
  abstract: string;
  thumbnailUrl: string;
  collectCount: number;
  likeCount: number;
  user: {
    username: string;
    fullname: string;
    avatarUrl: string;
  };
}
