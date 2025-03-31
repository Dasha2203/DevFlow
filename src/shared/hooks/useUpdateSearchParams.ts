import { useSearchParams } from 'react-router';

export const useUpdateSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateSearchParams = (key: string, value: string | number) => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      params.set(key, String(value));
      return params;
    });
  };

  return { searchParams, updateSearchParams };
};
