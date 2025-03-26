import { api } from '../../api';
import { Credentials } from '../../types';
import { User } from '../../types/user.types';

export const register = async ({
  username,
  password,
}: Credentials): Promise<User> => {
  try {
    const { data } = await api.post<User>('/register', { username, password });

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
