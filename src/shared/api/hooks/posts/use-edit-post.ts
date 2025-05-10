import { useCallback, useState } from 'react';
import { editPost } from '@api/services';
import { PostCredentials } from '@api/types';

export const useEditPost = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const updatePost = useCallback(
    async (id: string, params: PostCredentials) => {
      setLoading(true);
      setError(null);

      try {
        await editPost(id, params);
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
    updatePost,
    loading,
    error,
  };
};
