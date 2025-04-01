import { markPost } from '@api/services';
import { Mark, MarkEnum } from '@api/types';
import { useAppSelector } from '@app/store/hooks';
import { useCallback, useEffect, useState } from 'react';

export const useMarkPost = (marks: Mark[]) => {
  const { user } = useAppSelector((state) => state.user);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [mark, setMark] = useState<MarkEnum>(MarkEnum.None);

  const setMarkPost = useCallback(
    async (data: { postId: string; mark: MarkEnum }) => {
      setLoading(true);
      setError(null);

      try {
        if (mark === data.mark) {
          await markPost({ ...data, mark: MarkEnum.None });
          setMark(MarkEnum.None);
          return;
        }

        if (mark !== MarkEnum.None) {
          await markPost({ ...data, mark: MarkEnum.None });
        }

        const response = await markPost({ ...data, mark: data.mark });
        setMark(response.mark);
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
    [mark]
  );

  useEffect(() => {
    if (!user) {
      setMark(MarkEnum.None);
      return;
    }

    const mark = marks.find((el) => el.user.id === user.id);

    if (mark) {
      setMark(mark.type);
    }
  }, [user, marks]);

  return {
    setMarkPost,
    mark,
    loading,
    error,
  };
};
