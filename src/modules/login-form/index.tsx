import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Box, Button, Typography } from '@mui/material';
import { useLogin } from '@api/hooks/auth';
import { Credentials } from '@api/types';
import { FormField } from '@src/shared/components/index';
import styles from './styles.module.scss';
import { LoginFormFields } from './types';
import PasswordField from '@src/shared/components/password-field';
import { setUser } from '@src/shared/store/slices/user-slice';

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, user, loginUser } = useLogin();
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormFields>({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  useEffect(() => {
    if (user) {
      dispatch(setUser(user));
      navigate('/');
    }
  }, [user, navigate, dispatch]);

  const onSubmit: SubmitHandler<Credentials> = async (data) => {
    await loginUser(data);
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
    </Box>
  );
};

export default LoginForm;
