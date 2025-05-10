import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';
import { Box, Button, Link as MuiLink, Typography } from '@mui/material';
import { useLogin } from '@api/hooks';
import { Credentials } from '@api/types';
import { FormField, PasswordField } from '@components';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema } from './login-form-schema';
import { LoginFormFields } from './login-form.types';
import styles from './styles.module.scss';

export const LoginForm = () => {
  const navigate = useNavigate();
  const { error, loginUser } = useLogin();
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormFields>({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<Credentials> = async (data) => {
    await loginUser(data);
    navigate('/');
  };

  return (
    <Box
      component={'form'}
      onSubmit={handleSubmit(onSubmit)}
      className={styles.form}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Sign in
      </Typography>
      {error && (
        <Typography color="error" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}
      <FormField
        name="username"
        label="Username"
        type="text"
        control={control}
        error={!!errors.username}
        helperText={errors.username?.message}
      />
      <PasswordField
        name="password"
        label="Password"
        control={control}
        error={!!errors.password}
        helperText={errors.password?.message}
      />
      <Button
        type="submit"
        variant="contained"
        loading={isSubmitting}
        disabled={isSubmitting || !!Object.keys(errors).length}
      >
        Sign in
      </Button>
      <MuiLink component={Link} to="/register" sx={{ textAlign: 'center' }}>
        Register
      </MuiLink>
    </Box>
  );
};
