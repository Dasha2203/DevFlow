import { useEffect } from 'react';
import { useParams } from 'react-router';
import { PostForm } from '@modules/post-form';
import { useGetPost } from '@api/hooks';
import { PageTitle } from '@shared/ui';
import styles from './styles.module.scss';

export const EditPost = () => {
  const { postid } = useParams<{ postid: string }>();
  const { post, getPost } = useGetPost();

  useEffect(() => {
    if (!postid) return;

    getPost(postid);
  }, [postid]);

  return (
    <>
      <PageTitle className={styles['title']}>Edit post</PageTitle>
      {post && <PostForm initialValues={post} id={postid} />}
    </>
  );
};
