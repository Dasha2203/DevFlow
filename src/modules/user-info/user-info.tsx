import { useGetUserStatistic } from '@api/hooks';

import PersonIcon from '@mui/icons-material/Person';
import {
  Avatar,
  Box,
  Button,
  Chip,
  CircularProgress,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styles from './styles.module.scss';
import { Statistics } from './components/statistic';

export const UserInfo = () => {
  const { userid } = useParams<{ userid: string }>();
  const [expanded, setExpanded] = useState(false);
  const { user, statistic, loading, getUserStatistic } = useGetUserStatistic();

  useEffect(() => {
    if (!userid) return;

    getUserStatistic(userid);
  }, [userid, getUserStatistic]);

  if (loading) return <CircularProgress className={styles['loader']} />;

  return (
    <Box className={styles['user-info__container']}>
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
      <Button
        variant="outlined"
        color={'primary'}
        onClick={() => setExpanded((prev) => !prev)}
      >
        {expanded ? 'Hide Statistics' : 'Show Statistics'}
      </Button>
      {expanded && statistic && <Statistics {...statistic} />}
    </Box>
  );
};
