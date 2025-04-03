import { useCallback, useState } from 'react';
import { getPost } from '@api/services';
import { Post } from '@api/types';

export const useGetPost = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [post, setPost] = useState<Post | null>(null);

  const fetchPost = useCallback(async (id: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await getPost(id);
      setPost(response);
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
    getPost: fetchPost,
    post,
    loading,
    error,
  };
};
