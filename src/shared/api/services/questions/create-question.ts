import { api } from '@api/api';
import { Question, QuestionCredentials, Response } from '@api/types';

export const createQuestion = async (
  params: QuestionCredentials
): Promise<Question> => {
  try {
    const { data } = await api.post<Response<Question>>(`/questions`, params);

    return data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
