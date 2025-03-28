import { useCallback, useState } from 'react';
import { login } from '@services/auth';
import { User } from '@api/types/user.types';
import { Credentials } from '@api/types';

const useLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const loginUser = useCallback(async (credentials: Credentials) => {
    setLoading(true);
    setError(null);

    try {
      const userData = await login(credentials);
      setUser(userData);
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

  return {
    loginUser,
    user,
    loading,
    error,
  };
};

export default useLogin;
