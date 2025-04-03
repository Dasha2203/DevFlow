import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Chip,
  IconButton,
  Typography,
} from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';
import { Editor } from '@monaco-editor/react';
import { useAppSelector } from '@app/store/hooks';
import { useDeleteQuestion } from '@api/hooks';
import { QuestionProps } from './question.types';
import { ConfirmRemoveDialog } from './components';
import styles from './styles.module.scss';

export const Question = ({
  id,
  description,
  title,
  isResolved,
  attachedCode,
  user,
}: QuestionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { questionId } = useParams<{ questionId: string }>();
  const { user: me } = useAppSelector((state) => state.user);
  const {
    deleteQuestion,
    error: deleteError,
    loading: deleteLoading,
  } = useDeleteQuestion();

  const handleRemove = async () => {
    setIsOpen(false);
    await deleteQuestion(id);

    if (deleteError) return;

    if (questionId) {
      navigate('/questions');
    } else {
      navigate(0);
    }
  };

  return (
    <Card className={styles['question']} onClick={(e) => e.stopPropagation()}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" fontWeight="bold">
            {title}
          </Typography>
          <Chip
            label={isResolved ? 'Resolved' : 'Unresolved'}
            color={isResolved ? 'success' : 'warning'}
            size="small"
          />
        </Box>
        <Typography variant="body2" color="text.secondary" my={1}>
          {description}
        </Typography>
        <Editor
          height="200px"
          defaultValue={attachedCode}
          theme="vs-dark"
          options={{
            readOnly: true,
          }}
        />
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
          <Typography variant="body2" fontWeight="bold">
            {user.username}
          </Typography>
        </Box>
        <CardActions>
          {me?.id === user.id && (
            <IconButton
              aria-label="Remove this post"
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(true);
              }}
              disabled={deleteLoading}
              color="error"
            >
              <DeleteIcon />
            </IconButton>
          )}
        </CardActions>
      </CardContent>

      <ConfirmRemoveDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onRemove={handleRemove}
      />
    </Card>
  );
};
