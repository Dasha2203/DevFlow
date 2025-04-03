import { api } from '@api/api';
import { GetPostsParams, PostsResponse } from '@api/types/posts';

export const getPosts = async ({
  page,
  limit,
  sortBy,
  search,
  userId,
}: GetPostsParams = {}): Promise<PostsResponse> => {
  try {
    const params = new URLSearchParams();

    const queryParams: Record<string, string | undefined> = {
      page: page ? String(page) : undefined,
      limit: limit ? String(limit) : undefined,
      userId,
      sortBy,
      search,
    };

    Object.entries(queryParams).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      }
    });

    const { data } = await api.get<PostsResponse>('/snippets', {
      params,
    });

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
