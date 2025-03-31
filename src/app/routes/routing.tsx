import { BrowserRouter, Route, Routes } from 'react-router';
import handleRoutes from './handle-routes';
import { ROUTES } from './routes';

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path={PATHS.users.path}>
          <Route index element={<Users />} /> */}
        {/* Динамический маршрут для пользователя */}
        {/* <Route path=":userid" element={<User />} />
        </Route> */}
        {handleRoutes(ROUTES)}
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
