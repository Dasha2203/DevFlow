import { Control, FieldValues, Path } from 'react-hook-form';

export type EditorFieldProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  trigger: (name?: Path<T>) => Promise<boolean>;
  type?: string;
  error?: boolean;
  lang: string;
  helperText?: string;
  onChange?: (e: string) => string;
};
