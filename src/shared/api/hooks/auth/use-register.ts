import { useCallback, useState } from 'react';
import { register } from '@api/services/auth';
import { Credentials } from '@api/types';
import { useAppDispatch } from '@app/store/hooks';
import { setUser } from '@slices/user-slice';

export const useRegister = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const registerUser = useCallback(
    async (credentials: Credentials) => {
      setLoading(true);
      setError(null);

      try {
        const user = await register(credentials);
        dispatch(setUser(user));
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Registration error');
        }
      } finally {
        setLoading(false);
      }
    },
    [dispatch]
  );

  return {
    registerUser,
    loading,
    error,
  };
};
