import { Box, Toolbar } from '@mui/material';
import Header from '@src/modules/Header';
import Sidebar from '@src/modules/Sidebar';
import { drawerWidth } from '@src/modules/Sidebar/const';
import { useAppSelector } from '@src/store/hooks';
import { Outlet } from 'react-router';
import styles from './styles.module.scss';

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
