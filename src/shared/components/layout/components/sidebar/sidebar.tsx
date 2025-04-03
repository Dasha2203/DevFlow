import {
  ChevronLeft as ChevronLeftIcon,
  ContactSupport as ContactSupportIcon,
  Group as GroupIcon,
  Home as HomeIcon,
  Person2 as Person2Icon,
} from '@mui/icons-material';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import { Divider, Drawer, IconButton } from '@mui/material';
import { List } from './components';
import { drawerWidth } from './const';
import { SidebarProps } from './sidebar.types';
import styles from './styles.module.scss';

const mainLinks = [
  {
    link: '/',
    text: 'Home',
    icon: HomeIcon,
  },
  {
    link: '/post',
    text: 'Post snippet',
    icon: TextSnippetIcon,
  },
  {
    link: '/profile-snippet',
    text: 'My snippets',
    icon: TextSnippetIcon,
  },
  {
    link: '/questions',
    text: 'Questions',
    icon: ContactSupportIcon,
  },
  {
    link: '/users',
    text: 'Users',
    icon: GroupIcon,
  },
];

export const Sidebar = ({ isMenuOpen, setIsMenuOpen }: SidebarProps) => {
  const headerLinks = [{ icon: Person2Icon, text: 'Darya', link: '/profile' }];

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
      <List items={headerLinks} />
      <Divider />
      <List items={mainLinks} />
    </Drawer>
  );
};
