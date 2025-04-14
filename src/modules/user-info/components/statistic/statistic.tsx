import { JSX } from 'react';
import { List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { UserStatistic } from '@api/types';
import {
  BarChart,
  CheckCircle,
  Comment,
  Favorite,
  Help,
  ListAlt,
  ThumbDown,
} from '@mui/icons-material';
import { Entries } from '@shared/types';
import { StatisticProps } from './statistic.types';

const statIcons: Record<string, { icon: JSX.Element; text: string }> = {
  snippetsCount: { icon: <ListAlt color="primary" />, text: 'Snippets count' },
  rating: { icon: <BarChart color="secondary" />, text: 'Rating' },
  commentsCount: { icon: <Comment color="success" />, text: 'Comments count' },
  likesCount: { icon: <Favorite color="error" />, text: 'Likes count' },
  dislikesCount: {
    icon: <ThumbDown color="warning" />,
    text: 'Dislikes count',
  },
  questionsCount: { icon: <Help color="info" />, text: 'Questions count' },
  correctAnswersCount: {
    icon: <CheckCircle color="success" />,
    text: 'Correct answers count',
  },
  regularAnswersCount: {
    icon: <ListAlt />,
    text: 'Regular answers count',
  },
};

export const Statistic = (statistic: StatisticProps) => {
  const entriesStatistic = Object.entries(statistic) as Entries<UserStatistic>;

  return (
    <List>
      {entriesStatistic.map(([key, value]) => (
        <ListItem>
          <ListItemAvatar>{statIcons[key].icon}</ListItemAvatar>
          <ListItemText primary={statIcons[key].text} secondary={value} />
        </ListItem>
      ))}
    </List>
  );
};
