import { useParams } from 'react-router';
import { Chip, CircularProgress, Typography } from '@mui/material';
import { useSubscribePost } from '@api/hooks';
import { CommentsList, CreateCommentForm } from '@modules';
import { PostCard } from '@shared/components';
import styles from './styles.module.scss';

export const Post = () => {
  const { postid } = useParams<{ postid: string }>();
  const { post, loading } = useSubscribePost(postid);

  if (loading) return <CircularProgress className={styles['loader']} />;

  return (
    <>
      {post && <PostCard {...post} />}

      <Typography variant="h5" component="div" sx={{ my: 4 }}>
        Comments <Chip label={post?.comments.length} />
      </Typography>

      {post && <CreateCommentForm id={post.id} />}

      <CommentsList
        comments={post?.comments || []}
        className={styles['list']}
      />
    </>
  );
};
