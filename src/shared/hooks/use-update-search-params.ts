import { useCallback } from 'react';
import { useSearchParams } from 'react-router';

export const useUpdateSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateSearchParams = useCallback(
    (key: string, value: string | number | null) => {
      setSearchParams((prev) => {
        const params = new URLSearchParams(prev);

        if (!value) {
          params.delete(key);
        } else {
          params.set(key, String(value));
        }
        return params;
      });
    },
    []
  );

  return { searchParams, updateSearchParams };
};
