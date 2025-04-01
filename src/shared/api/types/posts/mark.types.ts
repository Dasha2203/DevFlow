import { User } from '@api/types';

export enum MarkEnum {
  Like = 'like',
  Dislike = 'dislike',
  None = 'none',
}

export interface Mark {
  id: string;
  type: MarkEnum;
  user: User;
}
