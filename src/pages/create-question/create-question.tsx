import { useAppSelector } from '@app/store/hooks';
import { QuestionForm } from '@modules/question-form';
import { CircularProgress } from '@mui/material';
import { PageTitle } from '@shared/ui';
import styles from './styles.module.scss';

export const CreateQuestion = () => {
  const { loading: loadingUser } = useAppSelector((state) => state.user);

  if (loadingUser) return <CircularProgress className={styles['loader']} />;

  return (
    <>
      <PageTitle className={styles['title']}>Create new question</PageTitle>
      <QuestionForm className={styles['form']} />
    </>
  );
};
