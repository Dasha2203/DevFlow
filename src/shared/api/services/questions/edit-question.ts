import { api } from '@api/api';
import { Question, QuestionCredentials, Response } from '@api/types';

export const editQuestion = async (
  id: string,
  params: QuestionCredentials
): Promise<void> => {
  try {
    await api.patch<Response<Question>>(`/questions/${id}`, params);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
