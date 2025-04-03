import { useEffect, useMemo } from 'react';
import { Box, CircularProgress, Pagination, Stack } from '@mui/material';
import { useGetQuestions } from '@api/hooks';
import { NoResult, Question } from '@shared/components';
import { useUpdateSearchParams } from '@shared/hooks';
import styles from './styles.module.scss';

export const QuestionsList = ({ userId }: { userId?: string }) => {
  const { questions, getQuestions, meta, loading } = useGetQuestions();
  const { searchParams, updateSearchParams } = useUpdateSearchParams();

  const parsedParams = useMemo(
    () => ({
      page: Number(searchParams.get('page')) || 1,
      limit: Number(searchParams.get('limit')) || 9,
      search: searchParams.get('search') || undefined,
      sortBy: searchParams.get('sortBy') || undefined,
      userId,
    }),
    [searchParams, userId]
  );

  const handleChangePage = (_: unknown, page: number) => {
    updateSearchParams('page', String(page));
  };

  useEffect(() => {
    getQuestions(parsedParams);
  }, [parsedParams, getQuestions]);

  if (loading) return <CircularProgress className={styles['loader']} />;

  if (!questions.length) return <NoResult className={styles['no-result']} />;

  return (
    <Box className={styles['posts-list']}>
      <Stack spacing={4}>
        {questions.map((question) => (
          <Question key={question.id} {...question} />
        ))}
      </Stack>
      <Pagination
        count={meta.totalPages}
        page={meta.currentPage}
        onChange={handleChangePage}
        variant="outlined"
        color="primary"
        className={styles['posts-list__pagination']}
      />
    </Box>
  );
};
