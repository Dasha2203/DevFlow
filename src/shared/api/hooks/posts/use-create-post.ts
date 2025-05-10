import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router';
import { createPost } from '@api/services';
import { PostCredentials } from '@api/types';

export const useCreatePost = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const addPost = useCallback(
    async (params: PostCredentials) => {
      setLoading(true);
      setError(null);

      try {
        const { id } = await createPost(params);
        navigate(`/posts/${id}`);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Authentication Error');
        }
      } finally {
        setLoading(false);
      }
    },
    [navigate]
  );

  return {
    createPost: addPost,
    loading,
    error,
  };
};
