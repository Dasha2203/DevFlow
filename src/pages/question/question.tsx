import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useGetQuestion } from '@api/hooks';
import { CircularProgress } from '@mui/material';
import { Question } from '@shared/components';
import { isNumber } from '@shared/utils';
import styles from './styles.module.scss';

export const QuestionPage = () => {
  const { questionId } = useParams<{ questionId: string }>();
  const { question, getQuestion, loading } = useGetQuestion();

  useEffect(() => {
    if (!isNumber(questionId)) return;

    getQuestion(questionId);
  }, [questionId, getQuestion]);

  if (loading) return <CircularProgress className={styles['loader']} />;

  return <>{question && <Question {...question} />}</>;
};
