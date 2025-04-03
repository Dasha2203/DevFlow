import { Link } from 'react-router';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { HeaderProps } from './header.types';

export const Header = ({ isAuth, isMenuOpen, setIsMenuOpen }: HeaderProps) => {
  const handleCloseSidebar = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <AppBar>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {!isMenuOpen && (
            <IconButton onClick={handleCloseSidebar}>
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              DevFlow
            </Link>
          </Typography>
        </Box>

        {isAuth && (
          <Box sx={{ display: 'flex', gap: '10px' }}>
            <Button
              component={Link}
              to="/login"
              variant="text"
              color="primary"
              sx={{
                color: 'white',
              }}
            >
              Login
            </Button>
            <Button
              component={Link}
              to="/register"
              variant="text"
              color="primary"
              sx={{
                color: 'white',
              }}
            >
              Register
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};
