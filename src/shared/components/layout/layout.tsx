import { Outlet } from 'react-router';
import { Box, Container, Toolbar } from '@mui/material';
import styles from './styles.module.scss';
import { useAppSelector } from '@app/store/hooks';
import { drawerWidth } from '@modules/sidebar/const';
import { Header } from '@modules/header';
import Sidebar from '@modules/sidebar/sidebar';

const isAuth = true;

export const Layout = () => {
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
          <Container className={styles['container']}>
            <Outlet />
          </Container>
        </Box>
      </div>
    </>
  );
};
