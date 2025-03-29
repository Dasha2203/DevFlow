import { Response, User, Pagination } from '@api/types';

export type UsersResponse = Response<Pagination<User>>;
