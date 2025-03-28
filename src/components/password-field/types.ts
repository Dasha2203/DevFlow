import { FieldValues } from 'react-hook-form';
import { FormFieldProps } from '../form-field/types';

export type PasswordFieldProps<T extends FieldValues> = Omit<
  FormFieldProps<T>,
  'type' | 'onChange'
>;
