import { api } from '@api/api';
import { CommentCredentials } from '@api/types';

export const createComment = async (
  data: CommentCredentials
): Promise<void> => {
  try {
    await api.post(`/comments`, data);

    return;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
