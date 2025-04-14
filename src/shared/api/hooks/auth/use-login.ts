import { useCallback, useState } from 'react';
import { Credentials } from '@api/types';
import { login } from '@api/services/auth';
import { useAppDispatch } from '@app/store/hooks';
import { setUser } from '@slices/user-slice';

export const useLogin = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const loginUser = useCallback(
    async (credentials: Credentials) => {
      setLoading(true);
      setError(null);

      try {
        const user = await login(credentials);
        dispatch(setUser(user));
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Authentication Error');
        }
      } finally {
        setLoading(false);
      }
    },
    [dispatch]
  );

  return {
    loginUser,
    loading,
    error,
  };
};
