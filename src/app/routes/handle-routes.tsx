import { Route } from 'react-router';
import { Route as RouteType } from '@shared/routes/types';

const handleRoutes = (routes: RouteType[]) => (
  <>
    {routes.map(({ path, element, children }, index) => (
      <Route key={index} path={path} element={!index ? element : undefined}>
        {index && <Route index element={element} />}
        {children && handleRoutes(children)}
      </Route>
    ))}
  </>
);

export default handleRoutes;
