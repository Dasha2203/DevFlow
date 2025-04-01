import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Favorite, ThumbDown } from '@mui/icons-material';
import { Button, CardActions } from '@mui/material';
import { useMarkPost } from '@api/hooks';
import { Mark, MarkEnum } from '@api/types';
import { PostCardFooterProps } from './post-card-footer.types';
import styles from './styles.module.scss';

export const PostCardFooter = ({ id, marks, user }: PostCardFooterProps) => {
  const navigate = useNavigate();
  const { setMarkPost, mark, loading } = useMarkPost(marks);
  const [dislikes, setDislikes] = useState(0);
  const [likes, setLikes] = useState(0);

  const getCountReactions = useCallback((type: MarkEnum, marks: Mark[]) => {
    return marks.filter((i) => i.type === type).length;
  }, []);

  const handleMark = async (type: MarkEnum) => {
    console.log('dislike');
    if (!user) {
      navigate('/register');
    }

    setMarkPost({ postId: id, mark: type });
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
        startIcon={<Favorite />}
        onClick={() => handleMark(MarkEnum.Like)}
        disabled={loading}
      >
        {likes + (mark === MarkEnum.Like ? 1 : 0)}
      </Button>
      <Button
        variant="text"
        color={mark === MarkEnum.Dislike ? 'warning' : 'inherit'}
        startIcon={<ThumbDown />}
        onClick={() => handleMark(MarkEnum.Dislike)}
        disabled={loading}
      >
        {dislikes + (mark === MarkEnum.Dislike ? 1 : 0)}
      </Button>
    </CardActions>
  );
};
