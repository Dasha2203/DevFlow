import { useCallback, useState } from 'react';
import { GetUsersParams, User, Meta } from '@api/types';
import { getUsers } from '@api/services';

const LIMIT = 10;
const initialMeta: Meta = {
  currentPage: 1,
  totalPages: 1,
  itemsPerPage: LIMIT,
  totalItems: 0,
  sortBy: [],
  search: '',
  select: [],
};

export const useGetUsers = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [meta, setMeta] = useState<Meta>(initialMeta);

  const fetchUsers = useCallback(async (params: GetUsersParams) => {
    setLoading(true);
    setError(null);

    try {
      const { data } = await getUsers({ limit: LIMIT, ...params });

      setUsers(data.data);
      setMeta(data.meta);
    } catch (err) {
      setError('Something went wrong');
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return { getUsers: fetchUsers, loading, error, users, meta };
};
