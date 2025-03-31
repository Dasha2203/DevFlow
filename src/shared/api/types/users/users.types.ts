import { Response, User, Pagination } from '@api/types';

export type GetUsersParams = {
  page?: number;
  limit?: number;
  sortBy?: string;
  search?: string;
  searchBy?: string;
};

export type UsersResponse = Response<Pagination<User>>;
