import { z } from 'zod';

const passwordValidation = z
  .string()
  .min(10, 'The password must contain at least 10 characters')
  .regex(
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_])\S*$/,
    'The password must contain at least one uppercase letter, one lowercase letter, one number, one symbol'
  );

export const formSchema = z
  .object({
    username: z
      .string()
      .min(6, 'The username must contain at least 6 characters'),
    password: passwordValidation,
    confirmPassword: passwordValidation,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });
