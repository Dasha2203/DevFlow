import { logout } from '@api/services';
import { useCallback, useState } from 'react';

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
