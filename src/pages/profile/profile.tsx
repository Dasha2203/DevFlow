import { useAppSelector } from '@app/store/hooks';
import { UserInfo } from '@modules';
import { PageTitle } from '@components';
import styles from './styles.module.scss';

export const Profile = () => {
  const { user } = useAppSelector((state) => state.user);

  return (
    <>
      <PageTitle>My profile</PageTitle>
      <UserInfo id={user?.id} className={styles['user-info']} />
    </>
  );
};
