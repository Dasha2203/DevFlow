import { Controller, FieldValues } from 'react-hook-form';
import { MenuItem, TextField } from '@mui/material';
import { SelectFieldProps } from './select-field.types';

export const SelectField = <T extends FieldValues>({
  control,
  name,
  options,
  error,
  helperText,
}: SelectFieldProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          select
          size="small"
          error={error}
          helperText={helperText}
          {...field}
        >
          {options.map((lang) => (
            <MenuItem key={lang} value={lang}>
              {lang}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
};
