import { BrowserRouter, Routes } from 'react-router';
import { useGetMe } from '@api/hooks';
import { CircularProgress } from '@mui/material';
import handleRoutes from './handle-routes';
import { ROUTES } from './routes';

const Routing = () => {
  const { loading } = useGetMe(true);

  if (loading) return <CircularProgress sx={{ mx: 'auto', mt: 40 }} />;

  return (
    <BrowserRouter>
      <Routes>{handleRoutes(ROUTES)}</Routes>
    </BrowserRouter>
  );
};

export default Routing;
