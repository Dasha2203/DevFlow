import Login from '@src/pages/login';
import Register from '@src/pages/register';
import Layout from '@src/shared/components/layout';
import { PATHS } from './paths';
import { Route } from './types';

export const ROUTES: Route[] = [
  {
    path: PATHS.home.path,
    element: <Layout />,
    children: [
      {
        path: PATHS.register.path,
        element: <Register />,
      },
      {
        path: PATHS.login.path,
        element: <Login />,
      },
      {
        path: PATHS.posts.path,
        element: <div>Posts</div>,
        children: [
          {
            path: PATHS.posts.children?.post.path ?? '',
            element: <div>post by id</div>,
          },
        ],
      },
    ],
  },
];
