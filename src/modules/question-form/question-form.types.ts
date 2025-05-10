import { z } from 'zod';
import { Question, QuestionCredentials } from '@api/types';
import { StyledProps } from '@shared/types';
import { questionFormSchema } from './question-form.schema';

type InitialValues = QuestionCredentials & Pick<Question, 'id'>;

export type QuestionFormProps = StyledProps & {
  initialValues?: InitialValues;
};

export type FormData = z.infer<typeof questionFormSchema>;
