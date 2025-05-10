import { Links } from './links.types';
import { Meta } from './meta.types';

export type Pagination<T> = {
  data: T[];
  meta: Meta;
  links: Links;
};
