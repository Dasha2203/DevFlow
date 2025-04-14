import { Meta, SortOrder } from '@api/types/pagination/meta.types';
import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import { useUpdateSearchParams } from '@shared/hooks';

const columns = ['ID', 'Username', 'Role'] as const;

type UsersTableHeadProps = {
  meta: Meta | null;
};

export const UsersTableHead = ({ meta }: UsersTableHeadProps) => {
  const { updateSearchParams } = useUpdateSearchParams();
  const sortByColumn = meta?.sortBy[0][0];
  const direction = meta?.sortBy[0][1].toLowerCase() as 'asc' | 'desc';

  const handleSort = (field: string) => {
    const column = field.toLowerCase();
    const isActive = sortByColumn === column;
    const nextSortOrder =
      isActive && direction.toUpperCase() === SortOrder.ASC
        ? SortOrder.DESC
        : SortOrder.ASC;

    updateSearchParams('sortBy', `${column}:${nextSortOrder}`);
  };

  return (
    <TableHead>
      <TableRow>
        {columns.map((column) => (
          <TableCell
            key={column}
            sortDirection={direction}
            sx={{ fontWeight: 700 }}
          >
            <TableSortLabel
              active={sortByColumn === column.toLowerCase()}
              direction={direction}
              onClick={() => handleSort(column)}
            >
              {column}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
