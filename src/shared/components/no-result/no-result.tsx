import clsx from 'clsx';
import { Box, Typography } from '@mui/material';
import SearchOffIcon from '@mui/icons-material/SearchOff';
import { NoResultProps } from './no-result.types';
import styles from './styles.module.scss';

export const NoResult = ({
  title = 'No results found',
  text = 'Try adjusting your search or filters',
  className,
  ...props
}: NoResultProps) => {
  return (
    <Box className={clsx(styles['no-result-box'], className)} {...props}>
      <SearchOffIcon
        sx={{ color: 'grey.500' }}
        className={styles['no-result-box__icon']}
      />
      <Typography
        variant="h6"
        component="p"
        sx={{ color: 'grey.700' }}
        className={styles['no-result-box__title']}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        component="span"
        sx={{ color: 'text.secondary' }}
        className={styles['no-result-box__text']}
      >
        {text}
      </Typography>
    </Box>
  );
};
