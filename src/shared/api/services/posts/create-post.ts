import { api } from '@api/api';
import { Post, PostCredentials, Response } from '@api/types';

export const createPost = async (params: PostCredentials): Promise<Post> => {
  try {
    const { data } = await api.post<Response<Post>>(`/snippets`, params);

    return data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
