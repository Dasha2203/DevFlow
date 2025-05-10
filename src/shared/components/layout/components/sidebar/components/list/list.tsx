import { Link } from 'react-router';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  List as MuiList,
} from '@mui/material';
import { PATHS } from '@shared/routes';
import styles from './styles.module.scss';

const filteredPaths = Object.values(PATHS).filter(
  (pathObj) =>
    pathObj.path !== 'login' &&
    pathObj.path !== 'register' &&
    pathObj.path !== 'posts'
);

export const List = () => {
  return (
    <MuiList>
      {filteredPaths.map((item) => (
        <ListItem
          key={item.path}
          disablePadding
          component={Link}
          to={item.path}
          className={styles['list__item-link']}
        >
          <ListItemButton>
            {item.icon && (
              <ListItemIcon>
                <item.icon />
              </ListItemIcon>
            )}

            <ListItemText
              className={styles['list__text']}
              primary={item.text}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </MuiList>
  );
};
