import { User } from '@shared/api/types';

export interface Question {
  id: number;
  title: string;
  description: string;
  attachedCode: string;
  user: User;
  answers: [];
  isResolved: boolean;
}

export interface QuestionCredentials {
  title: string;
  description: string;
  attachedCode: string;
}
