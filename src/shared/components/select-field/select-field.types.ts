import { Control, FieldValues, Path } from 'react-hook-form';

export type SelectFieldProps<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  control: Control<T>;
  type?: string;
  error?: boolean;
  options: string[];
  helperText?: string;
  onChange?: (e: string) => string;
};
