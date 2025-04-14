import { UsersList } from '@modules';
import { SearchField, PageTitle } from '@shared/components';

export const Users = () => {
  return (
    <>
      <PageTitle>List of users</PageTitle>

      <SearchField sx={{ mt: 3 }} />
      <UsersList />
    </>
  );
};
