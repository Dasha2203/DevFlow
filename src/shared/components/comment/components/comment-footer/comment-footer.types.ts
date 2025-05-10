export type CommentFooterProps = {
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
  onRemove: () => void;
  onEdit: () => void;
};
