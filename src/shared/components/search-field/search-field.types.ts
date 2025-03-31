import { SxProps, Theme } from '@mui/system';
import { StyledProps } from '@shared/types';
import { ChangeEvent } from 'react';

export type SearchFieldProps = StyledProps & {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onSearch?: () => void;
  placeholder?: string;
  defaultValue?: string;
  sx?: SxProps<Theme>;
};
