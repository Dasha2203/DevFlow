import clsx from 'clsx';
import { Typography } from '@mui/material';
import { PageTitleProps } from './page-title.types';
import styles from './styles.module.scss';

export const PageTitle = ({ children, className }: PageTitleProps) => {
  return (
    <Typography
      variant="h4"
      component="h1"
      sx={{
        fontWeight: 'bold',
        fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
      }}
      className={clsx(styles['title'], className)}
    >
      {children}
    </Typography>
  );
};
