import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';
import { useRegister } from '@api/hooks';
import { Credentials } from '@api/types';
import { FormField, PasswordField } from '@components';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Link as MuiLink, Typography } from '@mui/material';
import { formSchema } from './registration-form.schema';
import styles from './styles.module.scss';
import { RegisterFormFields } from './types';

export const RegistrationForm = () => {
  const navigate = useNavigate();
  const { error, registerUser } = useRegister();
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

  const onSubmit: SubmitHandler<Credentials> = async (data) => {
    await registerUser(data);
    navigate('/');
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
      <MuiLink component={Link} to="/login" sx={{ textAlign: 'center' }}>
        Login
      </MuiLink>
    </Box>
  );
};

export default RegistrationForm;
