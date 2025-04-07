import { getUserStatistic } from '@api/services/users/get-user-statistic';
import { User, UserStatistic } from '@api/types';
import { useCallback, useState } from 'react';

export const useGetUserStatistic = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [statistic, setStatistic] = useState<UserStatistic | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const getStatistic = useCallback(async (id: string | number) => {
    setLoading(true);
    setError(null);

    try {
      const { statistic, ...userProps } = await getUserStatistic(id);

      setStatistic(statistic);
      setUser(userProps);
    } catch (err) {
      setError('Something went wrong');
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return { getUserStatistic: getStatistic, loading, error, user, statistic };
};
