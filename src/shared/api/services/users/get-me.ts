import { api } from '@api/api';
import { Response, User } from '@api/types';

export const getMe = async (): Promise<User> => {
  try {
    const { data } = await api.get<Response<User>>('/me');

    return data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
