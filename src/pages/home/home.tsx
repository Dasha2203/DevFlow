import { PostsList } from '@modules';
import { SearchField, PageTitle } from '@components';

export const Home = () => {
  return (
    <>
      <PageTitle>List of posts</PageTitle>
      <SearchField sx={{ mt: 3 }} />
      <PostsList />
    </>
  );
};
