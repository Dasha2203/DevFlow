import { useCallback, useState } from 'react';
import { createPost } from '@api/services';
import { Post, PostCredentials } from '@api/types';

export const useCreatePost = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [post, setPost] = useState<Post | null>(null);

  const addPost = useCallback(async (params: PostCredentials) => {
    setLoading(true);
    setError(null);

    try {
      const data = await createPost(params);
      setPost(data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Authentication Error');
      }
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    createPost: addPost,
    post,
    loading,
    error,
  };
};
