import { User } from '@api/types';
import { Chip, TableCell, TableRow, TableRowProps } from '@mui/material';

type Props = Omit<TableRowProps, 'id'> & User;

export const Row = ({ id, username, role, ...props }: Props) => {
  return (
    <TableRow
      sx={{
        '&:last-child td, &:last-child th': { border: 0 },
        cursor: 'pointer',
      }}
      hover
      {...props}
    >
      <TableCell component="th" scope="row">
        {id}
      </TableCell>
      <TableCell>{username}</TableCell>
      <TableCell>
        <Chip label={role} />
      </TableCell>
    </TableRow>
  );
};
