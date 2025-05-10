import { Link } from 'react-router-dom';
import { Box, Button } from '@mui/material';

export const NotAuthenticatedActions = () => {
  return (
    <Box sx={{ display: 'flex', gap: '10px' }}>
      <Button
        component={Link}
        to="/login"
        variant="text"
        color="primary"
        sx={{ color: 'white' }}
      >
        Login
      </Button>
      <Button
        component={Link}
        to="/register"
        variant="text"
        color="primary"
        sx={{ color: 'white' }}
      >
        Register
      </Button>
    </Box>
  );
};
