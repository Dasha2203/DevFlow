import { useCallback, useEffect, useState } from 'react';
import { getLanguages } from '@api/services';
import { Language } from '@api/types';

export const useGetLanguages = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [languages, setLanguages] = useState<Language[]>([]);

  const fetchLanguages = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await getLanguages();
      setLanguages(data);
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

  useEffect(() => {
    fetchLanguages();
  }, [fetchLanguages]);

  return {
    getLanguages: fetchLanguages,
    refetch: fetchLanguages,
    languages,
    loading,
    error,
  };
};
