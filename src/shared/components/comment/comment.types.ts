import { CommentCredentials, User } from '@api/types';

export type CommentProps = {
  text: string;
  user: User;
  onEdit: (value: Omit<CommentCredentials, 'snippetId'>) => void;
  onRemove: () => void;
};
