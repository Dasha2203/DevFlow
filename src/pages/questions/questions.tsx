import { QuestionsList } from '@modules';
import { SearchField } from '@shared/components';
import { PageTitle } from '@shared/ui';

export const Questions = () => {
  return (
    <>
      <PageTitle>Questions</PageTitle>
      <SearchField sx={{ mt: 3 }} />
      <QuestionsList />
    </>
  );
};
