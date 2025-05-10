import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '@app/store/hooks';

export const ProtectedQuestRoute = () => {
  const { user } = useAppSelector((state) => state.user);

  return user ? <Navigate to="/" replace /> : <Outlet />;
};
