import { updateComment } from '@api/services';
import { CommentCredentials } from '@api/types';
import { useCallback, useState } from 'react';

export const useEditComment = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const editComment = useCallback(async (data: CommentCredentials) => {
    setLoading(true);
    setError(null);

    try {
      await updateComment(data);
    } catch (err) {
      setError('Something went wrong');
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return { editComment, loading, error };
};
