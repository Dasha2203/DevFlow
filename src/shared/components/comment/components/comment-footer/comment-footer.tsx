import { useState } from 'react';
import { Button, CardActions } from '@mui/material';
import { ConfirmRemoveDialog } from '@shared/components/comment/components';
import { CommentFooterProps } from './comment-footer.types';

export const CommentFooter = ({
  isEditing,
  setIsEditing,
  onEdit,
  onRemove,
}: CommentFooterProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleRemove = () => {
    onRemove();
    setIsOpen(false);
  };

  return (
    <CardActions>
      {isEditing ? (
        <>
          <Button size="small" color="success" onClick={onEdit}>
            Save
          </Button>
          <Button
            size="small"
            color="inherit"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </Button>
        </>
      ) : (
        <>
          <Button
            size="small"
            color="primary"
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Edit
          </Button>
          <Button size="small" color="error" onClick={() => setIsOpen(true)}>
            Remove
          </Button>
        </>
      )}

      <ConfirmRemoveDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onRemove={handleRemove}
      />
    </CardActions>
  );
};
