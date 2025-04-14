import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { useCreatePost, useEditPost, useGetLanguages } from '@api/hooks';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, CircularProgress, Stack } from '@mui/material';
import { EditorField, SelectField } from '@components';
import { ErrorText } from '@shared/ui';
import { postFormSchema } from './post-form-schema';
import { FormData, PostFormProps } from './post-form.types';
import styles from './styles.module.scss';

export const PostForm = ({ id, initialValues }: PostFormProps) => {
  const { createPost, post: newPost, error: errorCreate } = useCreatePost();
  const { updatePost, error: errorUpdate } = useEditPost();
  const navigate = useNavigate();
  const { languages, loading: loadingLanguages } = useGetLanguages();
  const {
    handleSubmit,
    setValue,
    watch,
    control,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(postFormSchema),
    defaultValues: initialValues || { code: '', language: '' },
  });
  const selectedLanguage = watch('language');
  const watchedValues = watch();
  const isChanged =
    JSON.stringify(watchedValues) !==
    JSON.stringify(initialValues || initialValues);

  const onSubmit = async (data: FormData) => {
    if (id) {
      await updatePost(id, data);

      if (errorUpdate) return;

      navigate(`/posts/${id}`);
      return;
    }

    await createPost(data);
  };

  useEffect(() => {
    if (newPost) {
      navigate(`/posts/${newPost.id}`);
    }
  }, [newPost, navigate]);

  useEffect(() => {
    if (!initialValues) return;

    setValue('code', initialValues.code);
    setValue('language', initialValues.language);
  }, [initialValues, setValue]);

  if (loadingLanguages)
    return <CircularProgress className={styles['loader']} />;

  return (
    <Box component={'form'} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4}>
        <SelectField
          options={languages}
          name="language"
          control={control}
          label="Language"
          error={!!errors.language}
          helperText={errors.language?.message}
        />

        <EditorField
          name="code"
          control={control}
          trigger={trigger}
          lang={selectedLanguage.toLowerCase()}
          error={!!errors.code}
          helperText={errors.code?.message}
        />

        {(errorCreate || errorUpdate) && (
          <ErrorText text={errorCreate || errorUpdate || 'dsdsd'} />
        )}

        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={isSubmitting || !isChanged}
          loading={isSubmitting}
        >
          {initialValues ? 'Save Changes' : 'Create Post'}
        </Button>
      </Stack>
    </Box>
  );
};
