import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import {
  Avatar,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useAppSelector } from '@app/store/hooks';
import { CommentFooter } from './components';
import { CommentProps } from './comment.types';
import styles from './styles.module.scss';

export const Comment = ({ user, text, onEdit, onRemove }: CommentProps) => {
  const { user: me } = useAppSelector((state) => state.user);
  const [isEditing, setIsEditing] = useState(false);
  const [isErrorEdit, setIsErrorEdit] = useState<string | null>('');

  const textFieldRef = useRef<HTMLInputElement | null>(null);

  const handleEdit = () => {
    if (!textFieldRef.current) return;

    if (!textFieldRef.current.value) {
      setIsErrorEdit('The field is empty');
      return;
    }

    onEdit({ content: textFieldRef.current.value });
    setIsEditing(false);
  };

  useEffect(() => {
    setIsErrorEdit(null);
  }, [isEditing]);

  return (
    <Card className={styles['comment']}>
      <CardContent>
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar>{user.username[0].toUpperCase()}</Avatar>
          <Typography variant="h6">{user.username}</Typography>
        </Stack>

        {isEditing ? (
          <TextField
            inputRef={textFieldRef}
            fullWidth
            variant="outlined"
            defaultValue={text}
            sx={{ mt: 1 }}
            error={!!isErrorEdit}
            helperText={isErrorEdit}
          />
        ) : (
          <Typography
            variant="body1"
            sx={{ mt: 1 }}
            className={clsx(
              styles['comment__text'],
              text.indexOf(' ') === -1 && styles['no-wrap']
            )}
          >
            {text}
          </Typography>
        )}
      </CardContent>

      {user.id === me?.id && (
        <CommentFooter
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          onEdit={handleEdit}
          onRemove={onRemove}
        />
      )}
    </Card>
  );
};
