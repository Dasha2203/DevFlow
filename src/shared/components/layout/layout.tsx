import { useState } from 'react';
import { Outlet } from 'react-router';
import { Box, Container, Toolbar } from '@mui/material';
import { useGetMe } from '@api/hooks';
import { Header, Sidebar } from '@shared/components/layout/components';
import { drawerWidth } from '@shared/components/layout/components/sidebar/const';
import styles from './styles.module.scss';

const isAuth = true;

export const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useGetMe();

  return (
    <>
      <Header
        isAuth={isAuth}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <div>
        <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
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
