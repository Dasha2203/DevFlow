import { api } from '@api/api';
import { Credentials } from '@api/types';
import { User } from '@api/types/user.types';

export const login = async ({
  username,
  password,
}: Credentials): Promise<User> => {
  try {
    const { data } = await api.post<User>('/auth/login', {
      username,
      password,
    });

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
