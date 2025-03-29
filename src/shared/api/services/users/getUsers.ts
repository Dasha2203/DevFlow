import { api } from '@api/api';
import { UsersResponse } from '@api/types';

export const getUsers = async ({
  page,
  limit,
  sortBy,
  search,
  searchBy,
}: {
  page?: number;
  limit?: number;
  sortBy?: string;
  search?: string;
  searchBy?: string;
}): Promise<UsersResponse> => {
  try {
    const params = [];
    if (page) {
      params.push('page=' + page);
    }
    if (limit) {
      params.push('limit=' + limit);
    }
    const { data } = await api.get<UsersResponse>(
      '/users' + '?' + params.join('&')
    );

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
