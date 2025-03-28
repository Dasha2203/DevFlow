import { isAxiosError } from 'axios';
import { api } from '@api/api';
import { Credentials, Response, User } from '@api/types';

export const register = async ({
  username,
  password,
}: Credentials): Promise<User> => {
  try {
    const { data } = await api.post<Response<User>>('/register', {
      username,
      password,
    });

    return data.data;
  } catch (error) {
    const messageError = 'Registration error';

    if (isAxiosError(error)) {
      console.error(
        'Registration Error:',
        error.response?.data || error.message
      );

      if (error.status === 409) {
        throw new Error('An account by that name already exists');
      }

      throw new Error(messageError);
    }

    console.error('Unknown error:', error);
    throw new Error(messageError);
  }
};
