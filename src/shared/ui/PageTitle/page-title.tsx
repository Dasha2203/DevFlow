import clsx from 'clsx';
import { Typography } from '@mui/material';
import styles from './styles.module.scss';
import { PageTitleProps } from './page-title.types';

export const PageTitle = ({ children, className }: PageTitleProps) => {
  return (
    <Typography
      variant="h3"
      component="h1"
      sx={{
        fontWeight: 'bold',
      }}
      className={clsx(styles['title'], className)}
    >
      {children}
    </Typography>
  );
};
