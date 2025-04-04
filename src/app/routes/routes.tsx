import { CreateQuestion } from '@pages/create-question';
import { EditQuestion } from '@pages/edit-question';
import { Home } from '@pages/home';
import {
  Login,
  Register,
  Users,
  User,
  Profile,
  MyQuestions,
} from '@pages/index';
import { MyPosts } from '@pages/my-posts/my-posts';
import { Post } from '@pages/post';
import { QuestionPage } from '@pages/question';
import { Questions } from '@pages/questions';
import { Layout } from '@shared/components';
import { Route } from '@shared/routes';
import { PATHS } from '@shared/routes/paths';
import { ProtectedRoutes } from './protected-route';
import { ProtectedQuestRoute } from './protected-quest-route';

export const ROUTES: Route[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        element: <ProtectedQuestRoute />,
        children: [
          {
            path: PATHS.login.path,
            element: <Login />,
          },
          {
            path: PATHS.register.path,
            element: <Register />,
          },
        ],
      },
      {
        path: PATHS.questions.path,
        children: [
          {
            index: true,
            element: <Questions />,
          },
          {
            path: PATHS.questions.children?.question.path,
            element: <QuestionPage />,
          },
          {
            element: <ProtectedRoutes />,
            children: [
              {
                path: PATHS.questions.children?.create.path,
                element: <CreateQuestion />,
              },
              {
                path: PATHS.questions.children?.edit.path,
                element: <EditQuestion />,
              },
            ],
          },
        ],
      },
      {
        element: <ProtectedRoutes />,
        children: [
          {
            path: PATHS.profile.path,
            children: [
              {
                index: true,
                element: <Profile />,
              },
              {
                path: PATHS.profile.children?.posts.path,
                element: <MyPosts />,
              },
              {
                path: PATHS.profile.children?.questions.path,
                element: <MyQuestions />,
              },
            ],
          },
        ],
      },
      {
        path: PATHS.posts.path,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: PATHS.posts.children?.post.path,
            element: <Post />,
          },
        ],
      },
      {
        path: PATHS.users.path,
        children: [
          {
            index: true,
            element: <Users />,
          },
          {
            path: PATHS.users.children?.user.path,
            element: <User />,
          },
        ],
      },
      {
        path: '*',
        element: <div>Not found</div>,
      },
    ],
  },
];
