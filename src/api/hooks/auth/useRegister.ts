import { useCallback, useState } from 'react';
import { AxiosError } from 'axios';
import { User } from '@api/types/user.types';
import { Credentials } from '@api/types';
import { register } from '@services/auth';

const useRegister = () => {
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
      if (err instanceof AxiosError) {
        if (err.response?.data?.errors) {
          setError('You have entered incorrect data');
        } else {
          console.log('Error:', err.response?.data?.message || err.message);
          setError('Something went wrong');
        }
      } else {
        console.error('Unexpected error:', err);
        setError('Something went wrong');
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

export default useRegister;
