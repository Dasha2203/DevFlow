import { useEffect } from 'react';
import { useParams } from 'react-router';
import { PostForm } from '@modules';
import { useGetPost } from '@api/hooks';
import { PageTitle } from '@components';
import styles from './styles.module.scss';

export const EditPost = () => {
  const { postid } = useParams<{ postid: string }>();
  const { post, getPost } = useGetPost();

  useEffect(() => {
    if (!postid) return;

    getPost(postid);
  }, [postid, getPost]);

  return (
    <>
      <PageTitle className={styles['title']}>Edit post</PageTitle>
      {post && <PostForm initialValues={post} id={postid} />}
    </>
  );
};
