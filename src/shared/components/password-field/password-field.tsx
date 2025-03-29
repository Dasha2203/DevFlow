import { FieldValues } from 'react-hook-form';
import { FormField } from '@components/form-field';
import { PasswordFieldProps } from './password-field.types';

export const PasswordField = <T extends FieldValues>({
  name,
  label,
  control,
  error,
  helperText,
}: PasswordFieldProps<T>) => (
  <FormField
    name={name}
    label={label}
    type="password"
    control={control}
    error={!!error}
    helperText={helperText}
    onChange={(e) => {
      const valueWithoutSpaces = e.replace(/\s/g, '');
      return valueWithoutSpaces;
    }}
  />
);
