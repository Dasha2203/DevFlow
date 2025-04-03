import { api } from '@api/api';
import { Question, Response } from '@api/types';

export const getQuestion = async (id: string | number): Promise<Question> => {
  try {
    const { data } = await api.get<Response<Question>>(`/questions/${id}`);

    return data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
