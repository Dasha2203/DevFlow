import { Link } from 'react-router-dom';
import { Box, IconButton } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export const AuthenticatedActions = () => {
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
      <IconButton
        component={Link}
        to="/logout"
        color="primary"
        sx={{ color: 'white' }}
      >
        <ExitToAppIcon />
      </IconButton>
    </Box>
  );
};
