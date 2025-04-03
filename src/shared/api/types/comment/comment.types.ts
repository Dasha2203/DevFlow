import { User } from '@api/types';

export interface Comment {
  id: string;
  content: string;
  user: User;
}

export interface CommentCredentials {
  content: string;
  snippetId: string;
}
