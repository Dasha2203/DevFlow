import {
  ChevronLeft as ChevronLeftIcon,
  ContactSupport as ContactSupportIcon,
  Group as GroupIcon,
  Home as HomeIcon,
  Person2 as Person2Icon,
} from '@mui/icons-material';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import { Divider, Drawer, IconButton } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { toggleMenu } from '@store/slices/menu-slice';
import { drawerWidth } from './const';
import styles from './styles.module.scss';
import { List } from './components';

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

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const isMenuOpen = useAppSelector((state) => state.menu.isOpen);

  const handleToggleSidebar = () => {
    dispatch(toggleMenu());
  };

  const headerLinks = [{ icon: Person2Icon, text: 'Darya', link: '/profile' }];

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
        <IconButton onClick={handleToggleSidebar}>
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

export default Sidebar;
