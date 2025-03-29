import { UsersList } from '@modules/users-list';
import { PageTitle } from '@shared/ui/PageTitle';

export const Users = () => {
  return (
    <>
      <PageTitle>List of users</PageTitle>
      <UsersList />
    </>
  );
};
