import { useEffect, useMemo } from 'react';
import { Link } from 'react-router';
import { useGetPosts } from '@api/hooks';
import { Box, Button, CircularProgress, Grid, Pagination } from '@mui/material';
import { NoResult, PostCard } from '@components';
import { useDeviceType, useUpdateSearchParams } from '@shared/hooks';
import styles from './styles.module.scss';
import { useAppSelector } from '@app/store/hooks';

export const PostsList = ({ userId }: { userId?: string }) => {
  const { posts, getPosts, meta, loading } = useGetPosts();
  const { searchParams, updateSearchParams } = useUpdateSearchParams();
  const { user } = useAppSelector((state) => state.user);
  const { isMobile } = useDeviceType(1200);

  const parsedParams = useMemo(
    () => ({
      page: Number(searchParams.get('page')) || 1,
      limit: Number(searchParams.get('limit')) || isMobile ? 10 : 9,
      search: searchParams.get('search') || undefined,
      sortBy: searchParams.get('sortBy') || undefined,
      userId,
    }),
    [searchParams, userId, isMobile]
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
      {user && (
        <Button
          component={Link}
          to={'/posts/new'}
          color="success"
          variant="outlined"
          sx={{
            mb: 2,
          }}
        >
          Create new post
        </Button>
      )}
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
