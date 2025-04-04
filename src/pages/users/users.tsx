import { UsersList } from '@modules';
import { SearchField } from '@shared/components';
import { PageTitle } from '@shared/ui';

export const Users = () => {
  return (
    <>
      <PageTitle>List of users</PageTitle>

      <SearchField sx={{ mt: 3 }} />
      <UsersList />
    </>
  );
};
