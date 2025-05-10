import { StyledProps } from '@shared/types';

export type CreateCommentFormProps = StyledProps & {
  id: string;
};

export type CommentFormFields = {
  content: string;
};
