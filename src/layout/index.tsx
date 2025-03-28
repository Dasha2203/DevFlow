import { Box, Toolbar } from '@mui/material';
import { useAppSelector } from '@src/store/hooks';
import { Outlet } from 'react-router';
import styles from './styles.module.scss';
import { Header, Sidebar } from '@src/modules';
import { drawerWidth } from '@src/modules/sidebar/const';

const isAuth = true;

const Layout = () => {
  const isMenuOpen = useAppSelector((state) => state.menu.isOpen);
  return (
    <>
      <Header isAuth={isAuth} />
      <div>
        <Sidebar />
        <Box
          component="main"
          className={styles['main']}
          sx={{
            marginLeft: isMenuOpen ? `${drawerWidth}px` : 0,
          }}
        >
          <Toolbar />
          <Outlet />
        </Box>
      </div>
    </>
  );
};

export default Layout;
