import { UserStatistic } from '@api/types';
import { List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { JSX } from 'react';
import {
  BarChart,
  CheckCircle,
  Comment,
  Favorite,
  Help,
  ListAlt,
  ThumbDown,
} from '@mui/icons-material';

const statIcons: Record<
  keyof UserStatistic,
  { icon: JSX.Element; text: string }
> = {
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

export const Statistics = (statistic: UserStatistic) => {
  return (
    <List>
      {Object.entries(statistic).map(([key, value]) => (
        <ListItem>
          <ListItemAvatar>
            {statIcons[key as keyof typeof statIcons].icon}
          </ListItemAvatar>
          <ListItemText
            primary={statIcons[key as keyof typeof statIcons].text}
            secondary={value}
          />
        </ListItem>
      ))}
    </List>
  );
};
