import { useGetMe } from '@api/hooks';
import { PostsList } from '@modules';
import { PageTitle } from '@shared/ui';

export const MyPosts = () => {
  const { user } = useGetMe();
  return (
    <>
      <PageTitle>My posts</PageTitle>
      {user && <PostsList userId={user.id.toString()} />}
    </>
  );
};
