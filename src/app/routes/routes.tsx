import { CreatePost } from '@pages/create-post';
import { EditPost } from '@pages/edit-post';
import { Home } from '@pages/home';
import { Login, Register, Users, User } from '@pages/index';
import { MyPosts } from '@pages/my-posts/my-posts';
import { Post } from '@pages/post';
import { Questions } from '@pages/questions';
import { Layout } from '@shared/components';
import { Route } from '@shared/routes';
import { PATHS } from '@shared/routes/paths';

export const ROUTES: Route[] = [
  {
    path: PATHS.home.path,
    element: <Layout />,
    children: [
      {
        path: PATHS.home.path,
        element: <Home />,
      },
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
        path: PATHS.profile.path,
        element: <>profile</>,
        children: [
          {
            path: PATHS.profile.children?.posts.path ?? '',
            element: <MyPosts />,
          },
        ],
      },
      {
        path: PATHS.posts.path,
        element: <div>Posts</div>,
        children: [
          {
            path: PATHS.posts.children?.post.path ?? '',
            element: <Post />,
          },
          {
            path: PATHS.posts.children?.create.path ?? '',
            element: <CreatePost />,
          },
          {
            path: PATHS.posts.children?.edit.path ?? '',
            element: <EditPost />,
          },
        ],
      },
      {
        path: PATHS.questions.path,
        element: <Questions />,
        // children: [
        //   {
        //     path: PATHS.questions.children?.question.path ?? '',
        //     element: <Post />,
        //   },
        //   {
        //     path: PATHS.posts.children?.create.path ?? '',
        //     element: <CreatePost />,
        //   },
        //   {
        //     path: PATHS.posts.children?.edit.path ?? '',
        //     element: <EditPost />,
        //   },
        // ],
      },
    ],
  },
];
