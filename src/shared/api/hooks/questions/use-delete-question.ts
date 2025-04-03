import { useCallback, useState } from 'react';
import { deleteQuestion } from '@api/services';

export const useDeleteQuestion = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const removeQuestion = useCallback(async (id: string | number) => {
    setLoading(true);
    setError(null);

    try {
      await deleteQuestion(id);
    } catch (err) {
      setError('Something went wrong');
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return { deleteQuestion: removeQuestion, loading, error };
};
