import { PostForm } from '@modules';
import { PageTitle } from '@components';
import styles from './styles.module.scss';

export const CreatePost = () => {
  return (
    <>
      <PageTitle className={styles['title']}>Create new post</PageTitle>
      <PostForm />
    </>
  );
};
