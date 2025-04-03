import { Comment } from '@api/types';
import { StyledProps } from '@shared/types';

export type CommentsListProps = StyledProps & {
  comments: Comment[];
};
