import { api } from '@api/api';

export const deleteQuestion = async (id: string | number): Promise<void> => {
  try {
    await api.delete(`/questions/${id}`);

    return;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
