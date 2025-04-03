import { useEffect, useMemo } from 'react';
import { useGetPosts } from '@api/hooks';
import { Box, CircularProgress, Grid, Pagination } from '@mui/material';
import { NoResult, PostCard } from '@shared/components';
import { useUpdateSearchParams } from '@shared/hooks';
import styles from './styles.module.scss';

export const PostsList = ({ userId }: { userId?: string }) => {
  const { posts, getPosts, meta, loading } = useGetPosts();
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
    getPosts(parsedParams);
  }, [parsedParams, getPosts]);

  if (loading) return <CircularProgress className={styles['loader']} />;

  if (!posts.length) return <NoResult className={styles['no-result']} />;

  return (
    <Box className={styles['posts-list']}>
      <Grid
        container
        spacing={3}
        justifyContent="flex-start"
        alignItems="stretch"
        sx={{ flexWrap: 'wrap' }}
      >
        {posts.map((post) => (
          <Grid
            key={post.id}
            size={{
              xs: 12,
              sm: 12,
              md: 6,
              lg: 4,
            }}
          >
            <PostCard {...post} />
          </Grid>
        ))}
      </Grid>
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
