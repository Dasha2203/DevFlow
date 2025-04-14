import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import clsx from 'clsx';
import PersonIcon from '@mui/icons-material/Person';
import {
  Avatar,
  Box,
  Button,
  Chip,
  CircularProgress,
  Typography,
} from '@mui/material';
import { useGetUserStatistic } from '@api/hooks';
import { NoResult } from '@components';
import { Statistic } from './components/statistic';
import { UserInfoProps } from './user-info.types';
import styles from './styles.module.scss';

export const UserInfo = ({ id, className, style }: UserInfoProps) => {
  const { userid } = useParams<{ userid: string }>();
  const [expanded, setExpanded] = useState(false);
  const { user, statistic, loading, getUserStatistic } = useGetUserStatistic();

  useEffect(() => {
    const idParam = id || userid;

    if (!idParam) return;

    getUserStatistic(idParam);
  }, [userid, getUserStatistic, id]);

  if (loading) return <CircularProgress className={styles['loader']} />;

  if (!user) return <NoResult />;

  return (
    <Box
      className={clsx(styles['user-info__container'], className)}
      style={style}
    >
      <Box className={styles['user-info__header']}>
        <Avatar sx={{ bgcolor: 'primary.main', width: 80, height: 80 }}>
          <PersonIcon sx={{ fontSize: 40 }} />
        </Avatar>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            {user?.username}
          </Typography>
          <Typography>ID: {user?.id}</Typography>
        </Box>
        <Chip label={user?.role} color="primary" size="small" />
      </Box>
      <Box sx={{ display: 'flex', gap: 4 }}>
        <Button
          variant="outlined"
          color={'primary'}
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? 'Hide Statistics' : 'Show Statistics'}
        </Button>
        {id === user?.id && (
          <>
            <Button
              variant="text"
              color={'primary'}
              component={Link}
              to="/profile/posts"
            >
              My posts
            </Button>
          </>
        )}
      </Box>
      {expanded && statistic && <Statistic {...statistic} />}
    </Box>
  );
};
