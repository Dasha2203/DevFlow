import { useGetMe } from '@api/hooks';
import { PostsList } from '@modules';
import { PageTitle } from '@components';

export const MyPosts = () => {
  const { user } = useGetMe();
  return (
    <>
      <PageTitle>My posts</PageTitle>
      {user && <PostsList userId={user.id.toString()} />}
    </>
  );
};
