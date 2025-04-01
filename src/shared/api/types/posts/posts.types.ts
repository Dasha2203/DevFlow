import { Pagination, Response } from '@api/types';
import { Post } from './post.types';

export type GetPostsParams = {
  page?: number;
  limit?: number;
  sortBy?: string;
  search?: string;
  searchBy?: string;
};

export type PostsResponse = Response<Pagination<Post>>;
