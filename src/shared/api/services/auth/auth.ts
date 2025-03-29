import { api } from '@api/api';
import { User } from '@api/types';

export const isAuth = async (): Promise<User> => {
  try {
    const { data } = await api.get<User>('/auth');

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
