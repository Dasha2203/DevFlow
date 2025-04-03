import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useDeletePost, useMarkPost } from '@api/hooks';
import { Mark, MarkEnum } from '@api/types';
import {
  Delete as DeleteIcon,
  Favorite as FavoriteIcon,
  ThumbDown as ThumbDownIcon,
} from '@mui/icons-material';
import { Button, CardActions, IconButton } from '@mui/material';
import { ConfirmRemoveDialog } from '@shared/components/post-card/components';
import { PostCardFooterProps } from './post-card-footer.types';
import styles from './styles.module.scss';

export const PostCardFooter = ({
  id,
  marks,
  user,
  isAuthor,
}: PostCardFooterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { postid } = useParams<{ postid: string }>();
  const { setMarkPost, mark, loading } = useMarkPost(marks);
  const {
    deletePost,
    error: deleteError,
    loading: deleteLoading,
  } = useDeletePost();
  const [dislikes, setDislikes] = useState(0);
  const [likes, setLikes] = useState(0);

  const getCountReactions = useCallback((type: MarkEnum, marks: Mark[]) => {
    return marks.filter((i) => i.type === type).length;
  }, []);

  const handleMark = async (type: MarkEnum) => {
    if (!user) {
      navigate('/register');
    }

    setMarkPost({ postId: id, mark: type });
  };

  const handleRemove = async () => {
    setIsOpen(false);
    await deletePost(id);

    if (deleteError) return;
    if (postid) {
      navigate('/profile/posts');
    } else {
      navigate(0);
    }
  };

  useEffect(() => {
    const allMarks: Mark[] = [];
    if (user) {
      const marksWithoutMe = marks.filter((i) => i.user.id !== user.id);
      allMarks.push(...marksWithoutMe);
    } else {
      allMarks.push(...marks);
    }

    setDislikes(getCountReactions(MarkEnum.Dislike, allMarks));
    setLikes(getCountReactions(MarkEnum.Like, allMarks));
  }, [marks, user, getCountReactions]);

  return (
    <CardActions className={styles['footer']}>
      <Button
        variant="text"
        color={mark === MarkEnum.Like ? 'error' : 'inherit'}
        startIcon={<FavoriteIcon />}
        onClick={() => handleMark(MarkEnum.Like)}
        disabled={loading}
        aria-label="Like this post"
      >
        {likes + (mark === MarkEnum.Like ? 1 : 0)}
      </Button>
      <Button
        variant="text"
        color={mark === MarkEnum.Dislike ? 'warning' : 'inherit'}
        startIcon={<ThumbDownIcon />}
        onClick={() => handleMark(MarkEnum.Dislike)}
        disabled={loading}
        aria-label="Disliking this post"
      >
        {dislikes + (mark === MarkEnum.Dislike ? 1 : 0)}
      </Button>
      {isAuthor && (
        <IconButton
          aria-label="Remove this post"
          onClick={() => setIsOpen(true)}
          disabled={deleteLoading}
          color="error"
        >
          <DeleteIcon />
        </IconButton>
      )}

      <ConfirmRemoveDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onRemove={handleRemove}
      />
    </CardActions>
  );
};
