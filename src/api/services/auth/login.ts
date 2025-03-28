import { api } from '@api/api';
import { Credentials, Response, User } from '@api/types';
import { isAxiosError } from 'axios';

export const login = async ({
  username,
  password,
}: Credentials): Promise<User> => {
  try {
    const { data } = await api.post<Response<User>>('/auth/login', {
      username,
      password,
    });

    return data.data;
  } catch (error) {
    const messageError = 'Authentication error';

    if (isAxiosError(error)) {
      console.error(
        'Authentication Error:',
        error.response?.data || error.message
      );

      if (error.status === 401) {
        throw new Error('Failed to log in. Check the entered data.');
      }

      throw new Error(messageError);
    }

    console.error('Unknown authentication error:', error);
    throw new Error(messageError);
  }
};
