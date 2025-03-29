import { Control, FieldValues, Path } from 'react-hook-form';

export type FormFieldProps<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  control: Control<T>;
  type?: string;
  error?: boolean;
  helperText?: string;
  onChange?: (e: string) => string;
};
