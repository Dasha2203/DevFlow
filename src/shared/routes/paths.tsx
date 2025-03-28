import {
  Group as GroupIcon,
  Home as HomeIcon,
  Person2 as Person2Icon,
  TextSnippet as TextSnippetIcon,
  ContactSupport as ContactSupportIcon,
} from '@mui/icons-material';
import { PATH } from './types';

export const PATHS: Record<string, PATH> = {
  home: {
    path: '/',
    text: 'Home',
    icon: HomeIcon,
  },
  posts: {
    path: '/posts',
    text: 'Post snippet',
    icon: TextSnippetIcon,
    children: {
      post: {
        path: ':postid',
      },
    },
  },
  users: {
    path: '/users',
    text: 'Users',
    icon: GroupIcon,
  },
  login: {
    path: '/login',
    text: 'Sign in',
  },
  register: {
    path: '/register',
    text: 'Sign up',
  },
  profile: {
    path: '/profile',
    text: 'Profile',
    icon: Person2Icon,
    children: {
      snippets: {
        path: '/snippets',
        icon: TextSnippetIcon,
      },
    },
  },
  questions: {
    path: '/questions',
    icon: ContactSupportIcon,
  },
};
