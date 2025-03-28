import { Route } from 'react-router';
import { Route as RouteType } from '../../shared/routes/types';

const handleRoutes = (routes: RouteType[]) => (
  <Route>
    {routes.map(({ path, element, children }, index) => (
      <Route key={index} path={path} element={element}>
        {children && handleRoutes(children)}
      </Route>
    ))}
  </Route>
);

export default handleRoutes;
