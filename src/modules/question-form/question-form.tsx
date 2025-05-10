import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';
import { Box, Button } from '@mui/material';
import { zodResolver } from '@hookform/resolvers/zod';
import { EditorField, FormField } from '@components';
import { useCreateQuestion, useEditQuestion } from '@api/hooks';
import { FormData, QuestionFormProps } from './question-form.types';
import { questionFormSchema } from './question-form.schema';
import styles from './styles.module.scss';

const initialState: FormData = {
  description: '',
  title: '',
  attachedCode: '',
};

export const QuestionForm = ({
  initialValues,
  className,
  ...props
}: QuestionFormProps) => {
  const {
    handleSubmit,
    control,
    trigger,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: initialValues || initialState,
    resolver: zodResolver(questionFormSchema),
  });
  const navigate = useNavigate();
  const { updateQuestion, error: updateError } = useEditQuestion();
  const { createQuestion, question } = useCreateQuestion();
  const watchedValues = watch();
  const isChanged =
    JSON.stringify(watchedValues) !==
    JSON.stringify(initialValues || initialState);

  const onSubmit = async (data: FormData) => {
    if (initialValues?.id) {
      await updateQuestion(initialValues.id, data);

      if (updateError) return;

      navigate(`/questions/${initialValues.id}`);
      return;
    }

    await createQuestion(data);
  };

  useEffect(() => {
    if (question) {
      navigate(`/questions/${question.id}`);
    }
  }, [question, navigate]);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      display="flex"
      flexDirection="column"
      gap={2}
      className={clsx(styles['form'], className)}
      {...props}
    >
      <FormField
        name="title"
        label="Title"
        error={!!errors.title}
        helperText={errors.title?.message}
        control={control}
      />

      <FormField
        name="description"
        label="Description"
        error={!!errors.description}
        helperText={errors.description?.message}
        multiline
        rows={3}
        control={control}
      />
      <EditorField
        name="attachedCode"
        control={control}
        trigger={trigger}
        lang={''}
        error={!!errors.attachedCode}
        helperText={errors.attachedCode?.message}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={isSubmitting || !isChanged}
        loading={isSubmitting}
      >
        {initialValues ? 'Save Changes' : 'Create question'}
      </Button>
    </Box>
  );
};
