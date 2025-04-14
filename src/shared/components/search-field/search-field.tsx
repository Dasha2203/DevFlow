import { forwardRef, useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from '@mui/material';
import { useDebounce, useUpdateSearchParams } from '@shared/hooks';
import { SearchFieldProps } from './search-field.types';

export const SearchField = forwardRef<HTMLInputElement, SearchFieldProps>(
  ({ defaultValue, ...props }, ref) => {
    const { searchParams, updateSearchParams } = useUpdateSearchParams();
    const [query, setQuery] = useState(
      defaultValue || searchParams.get('search') || ''
    );
    const debouncedQuery = useDebounce(query, 500);

    useEffect(() => {
      updateSearchParams('search', debouncedQuery);
    }, [debouncedQuery, updateSearchParams]);

    return (
      <TextField
        inputRef={ref}
        variant="outlined"
        size="medium"
        defaultValue={defaultValue || query}
        onChange={(e) => setQuery(e.target.value)}
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
