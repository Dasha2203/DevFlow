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
import { useAppSelector } from '@app/store/hooks';
import { AuthenticatedActions, NotAuthenticatedActions } from './components';

export const Header = ({ isAuth, isMenuOpen, setIsMenuOpen }: HeaderProps) => {
  const { user } = useAppSelector((state) => state.user);
  const handleCloseSidebar = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  console.log('header');

  return (
    <AppBar>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {!isMenuOpen && (
            <IconButton sx={{ color: 'white' }} onClick={handleCloseSidebar}>
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              DevFlow
            </Link>
          </Typography>
        </Box>

        {user ? <AuthenticatedActions /> : <NotAuthenticatedActions />}
      </Toolbar>
    </AppBar>
  );
};
