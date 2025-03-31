import { ElementType } from 'react';

export type Route = {
  path: string;
  element: React.ReactNode;
  children?: Route[];
  index?: boolean;
};

export type PATH = {
  path: string;
  text?: string;
  icon?: ElementType;
  children?: Record<string, PATH>;
};
