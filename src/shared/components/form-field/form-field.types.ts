import { TextFieldProps } from "@mui/material";
import { Control, FieldValues, Path } from "react-hook-form";

export type FormFieldProps<T extends FieldValues> = Omit<
  TextFieldProps,
  "onChange"
> & {
  name: Path<T>;
  label: string;
  control: Control<T>;
  type?: string;
  error?: boolean;
  helperText?: string;
  onChange?: (e: string) => string;
};
