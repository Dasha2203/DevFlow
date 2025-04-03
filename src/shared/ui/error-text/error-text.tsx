import { Typography } from '@mui/material';
import { ErrorTextProps } from './error-text.types';

export const ErrorText = ({ text }: ErrorTextProps) => {
  return (
    <Typography
      component="span"
      variant="subtitle2"
      color="error"
      sx={{ fontSize: '12px' }}
    >
      {text}
    </Typography>
  );
};
