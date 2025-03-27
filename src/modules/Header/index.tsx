import { Link } from 'react-router';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { HeaderProps } from './types';
import { toggleMenu } from '@src/store/slices/menu-slice';
import MenuIcon from '@mui/icons-material/Menu';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';

const Header = ({ isAuth }: HeaderProps) => {
  const dispatch = useAppDispatch();
  const isMenuOpen = useAppSelector((state) => state.menu.isOpen);

  return (
    <AppBar>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {!isMenuOpen && (
            <IconButton onClick={() => dispatch(toggleMenu())}>
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

export default Header;
