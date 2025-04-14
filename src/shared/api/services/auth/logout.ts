import { api } from '@api/api';

export const logout = async () => {
  try {
    return await api.post('/auth/logout');
  } catch (error) {
    console.error(error);
    throw error;
  }
};
