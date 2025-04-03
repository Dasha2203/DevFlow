import { api } from '@api/api';
import { Post, PostCredentials, Response } from '@api/types';

export const editPost = async (
  id: string,
  params: PostCredentials
): Promise<void> => {
  try {
    await api.patch<Response<Post>>(`/snippets/${id}`, params);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
