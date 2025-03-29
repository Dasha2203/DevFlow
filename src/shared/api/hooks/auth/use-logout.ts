import { useCallback, useState } from 'react';
import { logout } from '@src/shared/api/services/auth';

const useLogout = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const logoutUser = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      await logout();
    } catch (err) {
      setError('Something went wrong');
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return { logout: logoutUser, loading, error };
};

export default useLogout;
