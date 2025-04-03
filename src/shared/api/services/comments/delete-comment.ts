import { api } from '@api/api';

export const deleteComment = async (id: string | number): Promise<void> => {
  try {
    await api.delete(`/comments/${id}`);

    return;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
