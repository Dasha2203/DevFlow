import { getUsers } from '@api/services/users/getUsers';
import { User } from '@api/types';
import { useCallback, useState } from 'react';

const LIMIT = 10;

export const useGetUsers = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState<number>(1);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const { data } = await getUsers({
        page,
        limit: LIMIT,
      });
      console.log('here');
      console.log(data);
      setUsers(data.data);
    } catch (err) {
      setError('Something went wrong');
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, [page]);

  return { getUsers: fetchUsers, loading, error, page, setPage, users };
};
