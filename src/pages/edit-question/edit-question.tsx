import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { CircularProgress } from '@mui/material';
import { useGetQuestion } from '@api/hooks';
import { isNumber } from '@shared/utils';
import { ErrorText, PageTitle } from '@shared/ui';
import { QuestionForm } from '@modules/question-form';
import { useAppSelector } from '@app/store/hooks';
import styles from './styles.module.scss';

export const EditQuestion = () => {
  const navigate = useNavigate();
  const { user, loading: loadingUser } = useAppSelector((state) => state.user);
  const { questionId } = useParams<{ questionId: string }>();
  const { question, getQuestion, loading, error } = useGetQuestion();

  useEffect(() => {
    if (!isNumber(questionId)) {
      navigate('/questions');
      return;
    }

    getQuestion(questionId);
  }, [questionId, getQuestion, navigate]);

  useEffect(() => {
    // if (!user || (question && question.user.id !== user.id)) {
    //   navigate(`/questions/${questionId}`);
    // }
  }, [user, navigate, question, questionId]);

  if (loading || loadingUser)
    return <CircularProgress className={styles['loader']} />;

  return (
    <>
      <PageTitle>Edit question</PageTitle>
      {question && (
        <QuestionForm
          initialValues={{
            id: question.id,
            title: question.title,
            attachedCode: question.attachedCode,
            description: question.description,
          }}
          className={styles['form']}
        />
      )}
      {error && <ErrorText text={error} />}
    </>
  );
};
