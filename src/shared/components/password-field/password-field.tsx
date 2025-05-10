import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { IconButton, InputAdornment } from "@mui/material";
import {
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
} from "@mui/icons-material";
import { FormField } from "@components";
import { PasswordFieldProps } from "./password-field.types";

export const PasswordField = <T extends FieldValues>({
  name,
  label,
  control,
  error,
  helperText,
}: PasswordFieldProps<T>) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  return (
    <FormField
      name={name}
      label={label}
      type={showPassword ? "text" : "password"}
      control={control}
      error={!!error}
      helperText={helperText}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={togglePasswordVisibility}
                edge="end"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
      onChange={(e) => {
        const valueWithoutSpaces = e.replace(/\s/g, "");
        return valueWithoutSpaces;
      }}
    />
  );
};
