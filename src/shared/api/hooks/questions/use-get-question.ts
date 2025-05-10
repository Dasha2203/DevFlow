import { getQuestion } from '@api/services';
import { Question } from '@api/types';
import { useCallback, useState } from 'react';

export const useGetQuestion = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [question, setQuestion] = useState<Question | null>(null);

  const fetchQuestion = useCallback(async (id: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await getQuestion(id);
      setQuestion(response);
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
    getQuestion: fetchQuestion,
    question,
    loading,
    error,
  };
};
