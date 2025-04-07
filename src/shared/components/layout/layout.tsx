import { useState } from 'react';
import { Outlet } from 'react-router';
import { Box, Container, Toolbar } from '@mui/material';
import { Header, Sidebar } from '@shared/components/layout/components';
import { drawerWidth } from '@shared/components/layout/components/sidebar/const';
import styles from './styles.module.scss';

export const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div>
        <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Box
          component="main"
          className={styles['main']}
          sx={{
            marginLeft: isMenuOpen ? `${drawerWidth}px` : 0,
            '@media (max-width: 600px)': {
              marginLeft: 0,
            },
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
