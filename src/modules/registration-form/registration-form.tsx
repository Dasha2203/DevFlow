import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Typography } from '@mui/material';
import { Credentials } from '@api/types';
import { setUser } from '@slices/user-slice';
import { FormField, PasswordField } from '@components';
import { formSchema } from './registration-schema';
import { RegisterFormFields } from './types';
import styles from './styles.module.scss';
import { useRegister } from '@api/hooks';

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, user, registerUser } = useRegister();
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormFields>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
  });

  useEffect(() => {
    if (user) {
      dispatch(setUser(user));
      navigate('/');
    }
  }, [user, navigate, dispatch]);

  const onSubmit: SubmitHandler<Credentials> = async (data) => {
    await registerUser(data);
  };

  return (
    <Box
      component={'form'}
      onSubmit={handleSubmit(onSubmit)}
      className={styles.form}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Sign up
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
      <PasswordField
        name="confirmPassword"
        label="Confirm password"
        control={control}
        error={!!errors.confirmPassword}
        helperText={errors.confirmPassword?.message}
      />
      <Button
        type="submit"
        variant="contained"
        loading={isSubmitting}
        disabled={isSubmitting || !!Object.keys(errors).length}
      >
        Sign up
      </Button>
    </Box>
  );
};

export default RegistrationForm;
