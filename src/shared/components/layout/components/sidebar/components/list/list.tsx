import { Link } from 'react-router';
import {
  List as MuiList,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { ListProps } from './list.types';
import styles from './styles.module.scss';

export const List = ({ items }: ListProps) => {
  return (
    <MuiList>
      {items.map(({ link, text, icon: Icon }) => (
        <ListItem
          key={link}
          disablePadding
          component={Link}
          to={link}
          className={styles['list__item-link']}
        >
          <ListItemButton>
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
            <ListItemText className={styles['list__text']} primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </MuiList>
  );
};
