import { getQuestions } from '@api/services';
import { GetPostsParams, Meta, Question } from '@api/types';
import { useCallback, useState } from 'react';

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

export const useGetQuestions = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [meta, setMeta] = useState<Meta>(initialMeta);

  const fetchQuestions = useCallback(async (params: GetPostsParams) => {
    setLoading(true);
    setError(null);

    try {
      const { data } = await getQuestions({ limit: LIMIT, ...params });

      setQuestions(data.data);
      setMeta(data.meta);
    } catch (err) {
      setError('Something went wrong');
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return { getQuestions: fetchQuestions, loading, error, questions, meta };
};
