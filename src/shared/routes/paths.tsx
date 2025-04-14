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
    path: 'posts',
    text: 'Post snippet',
    children: {
      post: {
        path: ':postid',
      },
      create: {
        path: 'new',
        text: 'Create post',
      },
      edit: {
        path: ':postid/edit',
        text: 'Edit post',
      },
    },
  },
  questions: {
    path: 'questions',
    text: 'Questions',
    icon: ContactSupportIcon,
    children: {
      question: {
        path: ':questionId',
      },
      create: {
        path: 'new',
        text: 'Create question',
      },
      edit: {
        path: ':questionId/edit',
        text: 'Edit question',
      },
    },
  },
  users: {
    path: 'users',
    text: 'Users',
    icon: GroupIcon,
    children: {
      user: {
        path: ':userid',
        text: 'User',
      },
    },
  },
  login: {
    path: 'login',
    text: 'Sign in',
  },
  register: {
    path: 'register',
    text: 'Sign up',
  },
  profile: {
    path: 'profile',
    text: 'Profile',
    icon: Person2Icon,
    children: {
      posts: {
        path: 'posts',
        icon: TextSnippetIcon,
      },
      questions: {
        path: 'questions',
        icon: TextSnippetIcon,
      },
    },
  },
};
