import { z } from 'zod';

export const formSchema = z.object({
  username: z.string().min(1, 'Enter the username'),
  password: z.string().min(1, 'Enter the password'),
});
