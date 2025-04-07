import { useGetQuestions } from '@api/hooks';
import {
  Box,
  Button,
  CircularProgress,
  Pagination,
  Stack,
} from '@mui/material';
import { NoResult, Question } from '@components';
import { useUpdateSearchParams } from '@shared/hooks';
import { useEffect, useMemo } from 'react';
import styles from './styles.module.scss';
import { useAppSelector } from '@app/store/hooks';
import { Link } from 'react-router';

export const QuestionsList = () => {
  const { user } = useAppSelector((state) => state.user);
  const { questions, getQuestions, meta, loading } = useGetQuestions();
  const { searchParams, updateSearchParams } = useUpdateSearchParams();

  const parsedParams = useMemo(
    () => ({
      page: Number(searchParams.get('page')) || 1,
      limit: Number(searchParams.get('limit')) || 9,
      search: searchParams.get('search') || undefined,
      sortBy: searchParams.get('sortBy') || undefined,
    }),
    [searchParams]
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
    <Box className={styles['list']}>
      {user && (
        <Button
          component={Link}
          to={'/questions/new'}
          color="success"
          variant="outlined"
          sx={{
            mb: 2,
          }}
        >
          Create new question
        </Button>
      )}
      <Stack spacing={4}>
        {questions.map((question) => (
          <Question
            key={question.id}
            link={`/questions/${question.id}`}
            {...question}
          />
        ))}
      </Stack>
      <Pagination
        count={meta.totalPages}
        page={meta.currentPage}
        onChange={handleChangePage}
        variant="outlined"
        color="primary"
        className={styles['list__pagination']}
      />
    </Box>
  );
};
