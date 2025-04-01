import { Mark, User } from '@api/types';

export type PostCardFooterProps = {
  id: string;
  marks: Mark[];
  user: User | null;
};
