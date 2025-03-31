import { forwardRef } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from '@mui/material';
import { useUpdateSearchParams } from '@shared/hooks';
import { SearchFieldProps } from './search-field.types';

export const SearchField = forwardRef<HTMLInputElement, SearchFieldProps>(
  ({ onSearch, defaultValue, ...props }, ref) => {
    const { searchParams, updateSearchParams } = useUpdateSearchParams();

    return (
      <TextField
        inputRef={ref}
        variant="outlined"
        size="medium"
        defaultValue={defaultValue || searchParams.get('search') || ''}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            const value = (event.target as HTMLInputElement).value;

            updateSearchParams('search', value);

            if (onSearch) {
              onSearch();
            }
          }
        }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
        {...props}
      />
    );
  }
);

SearchField.displayName = 'SearchField';
