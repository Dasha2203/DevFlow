import { useEffect, useState } from 'react';
import { subscribeToUpdates } from '@api/subscribe-to-updates';
import { Post, Response } from '@api/types';

export const useSubscribePost = (id: string | undefined) => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    const controller = new AbortController();
    const { signal } = controller;

    subscribeToUpdates<Response<Post>>(`/snippets/${id}`, signal, (data) => {
      setPost(data.data);
      setLoading(false);
    });

    return () => {
      controller.abort();
    };
  }, [setPost, id]);

  return {
    post,
    loading,
  };
};
