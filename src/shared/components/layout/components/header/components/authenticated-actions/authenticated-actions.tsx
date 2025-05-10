import { Link } from 'react-router-dom';
import { Box, IconButton } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import useLogout from '@api/hooks/auth/use-logout';

export const AuthenticatedActions = () => {
  const { logout } = useLogout();

  return (
    <Box sx={{ display: 'flex', gap: '10px' }}>
      <IconButton
        component={Link}
        to="/profile"
        color="primary"
        sx={{ color: 'white' }}
      >
        <PersonIcon />
      </IconButton>
      <IconButton onClick={logout} color="primary" sx={{ color: 'white' }}>
        <ExitToAppIcon />
      </IconButton>
    </Box>
  );
};
