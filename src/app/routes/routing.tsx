import { BrowserRouter, Route, Routes } from 'react-router';
import handleRoutes from './handle-routes';
import { ROUTES } from './routes';

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        {handleRoutes(ROUTES)}
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
