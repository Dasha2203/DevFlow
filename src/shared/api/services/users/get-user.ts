import { api } from '@api/api';
import { User } from '@api/types';

export const getUser = async (id: string | number): Promise<User> => {
  try {
    const { data } = await api.get<User>(`/users/${id}`);

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
