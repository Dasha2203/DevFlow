import { useCallback, useState } from 'react';
import { logout } from '@api/services';
import { useAppDispatch } from '@app/store/hooks';
import { logout as clearUser } from '@slices/user-slice';

const useLogout = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const logoutUser = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      await logout();
      dispatch(clearUser());
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
