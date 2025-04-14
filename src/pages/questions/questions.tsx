import { QuestionsList } from '@modules';
import { SearchField, PageTitle } from '@shared/components';

export const Questions = () => {
  return (
    <>
      <PageTitle>Questions</PageTitle>
      <SearchField sx={{ mt: 3 }} />
      <QuestionsList />
    </>
  );
};
