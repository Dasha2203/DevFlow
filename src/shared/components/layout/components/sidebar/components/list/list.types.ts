import { ElementType } from 'react';

export type ListItem = {
  link: string;
  text: string;
  icon: ElementType;
};

export type ListProps = {
  items: ListItem[];
};
