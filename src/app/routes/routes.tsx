import { Login, Register, Users, User } from '@pages/index';
import { Layout } from '@shared/components';
import { Route } from '@shared/routes';
import { PATHS } from '@shared/routes/paths';

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
        path: PATHS.users.path,
        element: <Users />,
        children: [
          {
            path: PATHS.users.children?.user.path ?? '',
            element: <User />,
          },
        ],
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
