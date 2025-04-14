import clsx from 'clsx';
import { Box } from '@mui/material';
import { Comment } from '@components';
import { useDeleteComment, useEditComment } from '@api/hooks';
import { CommentsListProps } from './comments-list.types';
import styles from './styles.module.scss';

export const CommentsList = ({
  comments,
  className,
  style,
}: CommentsListProps) => {
  const { deleteComment } = useDeleteComment();
  const { editComment } = useEditComment();

  return (
    <>
      <Box className={clsx(className, styles['list'])} style={style}>
        {comments.map(({ id, content, user }) => (
          <Comment
            key={id}
            text={content}
            user={user}
            onEdit={({ content }) => editComment({ snippetId: id, content })}
            onRemove={() => deleteComment(id)}
          />
        ))}
      </Box>
    </>
  );
};
