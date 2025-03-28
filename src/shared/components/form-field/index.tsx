import { Controller, FieldValues } from 'react-hook-form';
import { TextField } from '@mui/material';
import { FormFieldProps } from './types';

const FormField = <T extends FieldValues>({
  name,
  label,
  control,
  type = 'text',
  error,
  helperText,
  onChange,
}: FormFieldProps<T>) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <TextField
        {...field}
        placeholder={label}
        label={label}
        fullWidth
        type={type}
        error={!!error}
        helperText={helperText}
        onChange={(e) => {
          let value = e.target.value;

          if (onChange) {
            value = onChange(value);
          }

          field.onChange(value);
        }}
      />
    )}
  />
);

export default FormField;
