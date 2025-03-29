import { useCallback, useState } from 'react';
import { register } from '@api/services/auth';
import { Credentials, User } from '@api/types';

export const useRegister = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const registerUser = useCallback(async (credentials: Credentials) => {
    setLoading(true);
    setError(null);

    try {
      const userData = await register(credentials);
      setUser(userData);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Registration error');
      }
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    registerUser,
    user,
    loading,
    error,
  };
};
