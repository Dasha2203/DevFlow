export type Meta = {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  totalPages: number;
  sortBy: [['string', 'ASC']];
  searchBy: string[];
  search: string;
  select: string[];
};
