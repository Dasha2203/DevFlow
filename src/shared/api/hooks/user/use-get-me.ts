import { useCallback, useEffect, useState } from 'react';
import { getMe } from '@api/services';
import { User } from '@api/types';
import { useAppDispatch, useAppSelector } from '@app/store/hooks';
import { setUser as setGlobalUser } from '@slices/user-slice';

export const useGetMe = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.user);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const getUser = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const userData = await getMe();
      setUser(userData);
      dispatch(setGlobalUser(userData));
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Authentication Error');
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (data.user) {
      setUser(data.user);
      return;
    }

    getUser();
  }, [data, setUser, getUser]);

  return {
    getMe: getUser,
    user,
    loading,
    error,
  };
};
