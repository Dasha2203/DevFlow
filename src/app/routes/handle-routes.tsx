import { Route } from 'react-router';
import { Route as RouteType } from '@shared/routes/types';

const handleRoutes = (routes: RouteType[]) => (
  <>
    {routes.map(({ path, element, children, index }, idx) => (
      <Route key={idx} path={path} element={element}>
        {index && <Route index element={element} />}
        {children && handleRoutes(children)}
      </Route>
    ))}
  </>
);

export default handleRoutes;
