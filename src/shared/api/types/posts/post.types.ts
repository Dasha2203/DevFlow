import { User } from '@api/types';
import { Mark } from './mark.types';

export interface Post {
  id: string;
  language: string;
  code: string;
  user: User;
  marks: Mark[];
}
