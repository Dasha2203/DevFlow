import { ElementType } from 'react';

export type Route = {
  path: string;
  element: React.ReactNode;
  children?: Route[];
};

export type PATH = {
  path: string;
  text?: string;
  icon?: ElementType;
  children?: Record<string, PATH>;
};
