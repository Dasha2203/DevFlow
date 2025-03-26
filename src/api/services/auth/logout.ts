import { api } from '../../api';

export const logout = async () => {
  try {
    return await api.post('/auth/logout');
  } catch (error) {
    console.log(error);
    throw error;
  }
};
