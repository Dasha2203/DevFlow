import { PostForm } from '@modules';
import { PageTitle } from '@shared/ui';
import styles from './styles.module.scss';

export const CreatePost = () => {
  return (
    <>
      <PageTitle className={styles['title']}>Create new post</PageTitle>
      <PostForm />
    </>
  );
};
