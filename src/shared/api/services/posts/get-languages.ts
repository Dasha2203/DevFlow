import { api } from '@api/api';
import { Language, Response } from '@api/types';

export const getLanguages = async (): Promise<Language[]> => {
  try {
    const { data } = await api.get<Response<Language[]>>(`/snippets/languages`);

    return data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
