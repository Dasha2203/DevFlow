import { api } from '@api/api';
import { Post, Response } from '@api/types';

export const getPost = async (id: string | number): Promise<Post> => {
  try {
    const { data } = await api.get<Response<Post>>(`/snippets/${id}`);

    return data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
