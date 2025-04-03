import { useCallback, useState } from 'react';
import { createComment } from '@api/services';
import { CommentCredentials } from '@api/types';

export const useCreateComment = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const addComment = useCallback(async (data: CommentCredentials) => {
    setLoading(true);
    setError(null);

    try {
      await createComment(data);
    } catch (err) {
      setError('Something went wrong');
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return { createComment: addComment, loading, error };
};
