import { api } from '@api/api';
import { GetUsersParams, UsersResponse } from '@api/types';

export const getUsers = async ({
  page,
  limit,
  sortBy,
  search,
}: GetUsersParams = {}): Promise<UsersResponse> => {
  try {
    const params = new URLSearchParams();

    const queryParams: Record<string, string | undefined> = {
      page: page ? String(page) : undefined,
      limit: limit ? String(limit) : undefined,
      sortBy,
      search,
    };

    Object.entries(queryParams).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      }
    });

    const { data } = await api.get<UsersResponse>('/users', {
      params,
    });

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
