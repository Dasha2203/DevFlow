import { Pagination, Question, Response } from '@api/types';

export type GetQuestionsParams = {
  page?: number;
  limit?: number;
  sortBy?: string;
  search?: string;
  searchBy?: string;
  userId?: string;
};

export type QuestionsResponse = Response<Pagination<Question>>;
