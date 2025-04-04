import { useGetMe } from '@api/hooks';
import { QuestionsList } from '@modules/questions-list';
import { PageTitle } from '@shared/ui';

export const MyQuestions = () => {
  const { user } = useGetMe();
  return (
    <>
      <PageTitle>My questions</PageTitle>
      {user && <QuestionsList userId={user.id.toString()} />}
    </>
  );
};
