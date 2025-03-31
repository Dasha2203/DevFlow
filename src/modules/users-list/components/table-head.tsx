import { Meta, SortOrder } from '@api/types/pagination/meta.types';
import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import { useUpdateSearchParams } from '@shared/hooks';

const columns = ['ID', 'Username', 'Role'] as const;

type UsersTableHeadProps = {
  meta: Meta | null;
};

export const UsersTableHead = ({ meta }: UsersTableHeadProps) => {
  const { updateSearchParams } = useUpdateSearchParams();
  const handleSort = (field: string) => {
    const column = field.toLowerCase();
    const currentSort = meta?.sortBy?.[0];
    const isActive = currentSort?.[0] === column;
    const nextSortOrder =
      isActive && currentSort[1] === 'ASC' ? SortOrder.DESC : SortOrder.ASC;

    updateSearchParams('sortBy', `${column}:${nextSortOrder}`);
  };

  return (
    <TableHead>
      <TableRow>
        {columns.map((column) => {
          const isActive = meta?.sortBy?.[0]?.[0] === column.toLowerCase();
          const direction = (meta?.sortBy?.[0]?.[1]?.toLowerCase() ??
            undefined) as 'asc' | 'desc' | undefined;

          return (
            <TableCell
              key={column}
              sortDirection={direction}
              sx={{ fontWeight: 700 }}
            >
              <TableSortLabel
                active={isActive}
                direction={direction}
                onClick={() => handleSort(column)}
              >
                {column}
              </TableSortLabel>
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};
