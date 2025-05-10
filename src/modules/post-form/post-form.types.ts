import { z } from 'zod';
import { postFormSchema } from './post-form-schema';

export type FormData = z.infer<typeof postFormSchema>;

export type PostFormProps = {
  initialValues?: FormData;
  id?: string;
};
