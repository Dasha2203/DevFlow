import { z } from 'zod';

export const postFormSchema = z.object({
  code: z.string().min(1, "You didn't enter the code"),
  language: z.string().min(1, 'Select the programming language'),
});
