import { useCallback, useState } from 'react';
import { deletePost } from '@api/services/posts/delete-post';

export const useDeletePost = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const removePost = useCallback(async (id: string | number) => {
    setLoading(true);
    setError(null);

    try {
      await deletePost(id);
    } catch (err) {
      setError('Something went wrong');
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return { deletePost: removePost, loading, error };
};
