import { useCallback, useState } from 'react';
import { editQuestion } from '@api/services';
import { QuestionCredentials } from '@api/types';

export const useEditQuestion = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const updateQuestion = useCallback(
    async (id: string, params: QuestionCredentials) => {
      setLoading(true);
      setError(null);

      try {
        await editQuestion(id, params);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Something went wrong');
        }
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return {
    updateQuestion,
    loading,
    error,
  };
};
