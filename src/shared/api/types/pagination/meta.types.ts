export enum SortOrder {
  ASC = 'ASC',
  DESC = 'DESC',
}

export type SortParam = [string, SortOrder];

export type Meta = {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  totalPages: number;
  sortBy: SortParam[];
  search: string;
  select: string[];
};
