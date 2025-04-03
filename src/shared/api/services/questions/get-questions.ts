import { api } from '@api/api';
import { PostsResponse } from '@api/types/posts';
import { GetQuestionsParams } from '@api/types/question/questions.types';

export const getQuestions = async ({
  page,
  limit,
  sortBy,
  search,
  userId,
}: GetQuestionsParams = {}): Promise<PostsResponse> => {
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

    const { data } = await api.get<PostsResponse>('/questions', {
      params,
    });

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
