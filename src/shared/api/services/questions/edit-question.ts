import { api } from '@api/api';
import { Question, QuestionCredentials, Response } from '@api/types';

export const editQuestion = async (
  id: number,
  params: QuestionCredentials
): Promise<void> => {
  try {
    await api.patch<Response<Question>>(`/questions/${id}`, params);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
