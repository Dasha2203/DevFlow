import { useCallback, useState } from 'react';
import { getPosts } from '@api/services';
import { GetPostsParams, Meta, Post } from '@api/types';

const LIMIT = 10;
const initialMeta: Meta = {
  currentPage: 1,
  totalPages: 1,
  itemsPerPage: LIMIT,
  totalItems: 0,
  sortBy: [],
  search: '',
  select: [],
};

export const useGetPosts = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [meta, setMeta] = useState<Meta>(initialMeta);

  const fetchPosts = useCallback(async (params: GetPostsParams) => {
    setLoading(true);
    setError(null);

    try {
      const { data } = await getPosts({ limit: LIMIT, ...params });

      setPosts(data.data);
      setMeta(data.meta);
    } catch (err) {
      setError('Something went wrong');
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return { getPosts: fetchPosts, loading, error, posts, meta };
};
