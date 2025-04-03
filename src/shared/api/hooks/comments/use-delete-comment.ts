import { useCallback, useState } from 'react';
import { deleteComment } from '@api/services';

export const useDeleteComment = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const removeComment = useCallback(async (id: string | number) => {
    setLoading(true);
    setError(null);

    try {
      await deleteComment(id);
    } catch (err) {
      setError('Something went wrong');
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return { deleteComment: removeComment, loading, error };
};
