import { IPost } from '@/shared/interfaces';

export interface PostsApiResponse {
  posts: IPost[];
  status: string;
}
