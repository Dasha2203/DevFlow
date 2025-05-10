import { useCallback, useState } from 'react';
import { createQuestion } from '@api/services';
import { Question, QuestionCredentials } from '@api/types';

export const useCreateQuestion = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [question, setQuestion] = useState<Question | null>(null);

  const addQuestion = useCallback(async (params: QuestionCredentials) => {
    setLoading(true);
    setError(null);

    try {
      const data = await createQuestion(params);
      setQuestion(data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Something went wrong');
      }
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    createQuestion: addQuestion,
    question,
    loading,
    error,
  };
};
