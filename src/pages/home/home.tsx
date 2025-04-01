import { PostsList } from '@modules/posts-list/posts-list';
import { SearchField } from '@shared/components';
import { PageTitle } from '@shared/ui';

export const Home = () => {
  return (
    <>
      <PageTitle>List of posts</PageTitle>
      <SearchField sx={{ mt: 3 }} />
      <PostsList />
    </>
  );
};
