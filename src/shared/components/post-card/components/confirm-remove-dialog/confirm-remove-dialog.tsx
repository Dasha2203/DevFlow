import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';
import { ConfirmRemoveDialogProps } from './confirm-remove-dialog.types';

export const ConfirmRemoveDialog = ({
  isOpen,
  setIsOpen,
  onRemove,
}: ConfirmRemoveDialogProps) => {
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <DialogTitle>Confirm Deletion</DialogTitle>
      <DialogContent>
        <Typography>Are you sure you want to delete this post?</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setIsOpen(false)} color="secondary">
          Cancel
        </Button>
        <Button onClick={onRemove} color="error">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};
