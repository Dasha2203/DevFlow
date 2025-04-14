import { useEffect, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import {
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TablePagination,
} from '@mui/material';
import { useGetUsers } from '@api/hooks';
import { NoResult } from '@components';
import { Row, UsersTableHead } from './components';
import styles from './styles.module.scss';

const rowsPerPageOptions = [10, 15, 20];

const UsersList = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { users, getUsers, meta, loading } = useGetUsers();

  const parsedParams = useMemo(
    () => ({
      page: Number(searchParams.get('page')) || 1,
      limit: Number(searchParams.get('limit')) || 10,
      search: searchParams.get('search') || undefined,
      sortBy: searchParams.get('sortBy') || undefined,
    }),
    [searchParams]
  );

  useEffect(() => {
    getUsers(parsedParams);
  }, [parsedParams, getUsers]);

  const handleChangePage = (_: unknown, page: number) => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      params.set('page', String(page + 1));
      return params;
    });
  };

  if (loading) return <CircularProgress className={styles['loader']} />;

  if (!users.length) return <NoResult className={styles['no-result']} />;

  return (
    <TableContainer component={Paper} className={styles['table']}>
      <Table sx={{ minWidth: 650 }} size="small">
        <UsersTableHead meta={meta} />
        <TableBody>
          {users.map((user) => (
            <Row
              key={user.id}
              onClick={() => navigate(`/users/${user.id}`)}
              {...user}
            />
          ))}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        rowsPerPageOptions={rowsPerPageOptions}
        count={meta.totalItems || 0}
        rowsPerPage={meta.itemsPerPage || rowsPerPageOptions[0]}
        page={meta.currentPage - 1}
        onPageChange={handleChangePage}
        onRowsPerPageChange={(e) => setSearchParams({ limit: e.target.value })}
      />
    </TableContainer>
  );
};

export default UsersList;
