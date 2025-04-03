import { api } from '@api/api';
import { CommentCredentials } from '@api/types';

export const updateComment = async ({
  snippetId,
  content,
}: CommentCredentials): Promise<void> => {
  try {
    await api.patch(`/comments/${snippetId}`, {
      content,
    });

    return;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
