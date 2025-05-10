import { z } from 'zod';

export const commentSchema = z.object({
  content: z
    .string()
    .min(1, 'A comment cannot be empty')
    .max(200, 'A comment cannot be longer than 200 characters'),
});
