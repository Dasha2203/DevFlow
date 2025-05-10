import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '@app/store/hooks';

export const ProtectedRoutes = () => {
  const { user } = useAppSelector((state) => state.user);

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};
