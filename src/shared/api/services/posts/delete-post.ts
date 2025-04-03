import { api } from '@api/api';

export const deletePost = async (id: string | number): Promise<void> => {
  try {
    await api.delete(`/snippets/${id}`);

    return;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
