import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { z } from 'zod';
import { useCreateComment } from '@api/hooks';
import { useAppSelector } from '@app/store/hooks';
import { FormField } from '@components';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Stack } from '@mui/material';
import { ErrorText } from '@shared/ui';
import {
  CommentFormFields,
  CreateCommentFormProps,
} from './create-comment-form.types';

const commentSchema = z.object({
  content: z
    .string()
    .min(1, 'A comment cannot be empty')
    .max(200, 'A comment cannot be longer than 200 characters'),
});

export const CreateCommentForm = ({ id, ...props }: CreateCommentFormProps) => {
  const navigate = useNavigate();
  const { createComment, error } = useCreateComment();
  const { user: me } = useAppSelector((state) => state.user);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CommentFormFields>({
    defaultValues: {
      content: '',
    },
    resolver: zodResolver(commentSchema),
  });

  const onSubmitHandler = ({ content }: CommentFormFields) => {
    if (!me) {
      navigate('/register');
      return;
    }
    if (content.trim() === '') {
      return;
    }

    createComment({ snippetId: id, content: content });
    reset();
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmitHandler)} {...props}>
      <Stack
        spacing={2}
        sx={{
          width: '100%',
          margin: '0 auto',
        }}
      >
        <FormField
          name="content"
          label="Your comment"
          type="text"
          control={control}
          error={!!errors.content}
          helperText={errors.content?.message}
        />
        {error && <ErrorText text={error} />}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          loading={isSubmitting}
          disabled={isSubmitting}
          sx={{ width: 'fit-content' }}
        >
          Send
        </Button>
      </Stack>
    </Box>
  );
};
