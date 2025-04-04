import { ChevronLeft as ChevronLeftIcon } from '@mui/icons-material';
import { Divider, Drawer, IconButton } from '@mui/material';
import { List } from './components';
import { drawerWidth } from './const';
import { SidebarProps } from './sidebar.types';
import styles from './styles.module.scss';

export const Sidebar = ({ isMenuOpen, setIsMenuOpen }: SidebarProps) => {
  const handleCloseSidebar = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Drawer
      sx={{
        width: drawerWidth,

        '& .MuiDrawer-paper': {
          width: drawerWidth,
          marginTop: 8,
        },
      }}
      className={styles['sidebar']}
      variant="persistent"
      anchor="left"
      open={isMenuOpen}
    >
      <div className={styles['sidebar-header']}>
        <IconButton onClick={handleCloseSidebar}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List />
    </Drawer>
  );
};
