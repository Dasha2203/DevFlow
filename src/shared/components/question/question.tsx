import { Box, Card, CardContent, Chip, Paper, Typography } from '@mui/material';
import { QuestionProps } from './question.types';

export const Question = ({
  description,
  title,
  isResolved,
  attachedCode,
  user,
}: QuestionProps) => {
  return (
    <Card>
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
        <Typography variant="body2" color="text.secondary" mt={1}>
          {description}
        </Typography>
        <Paper
          variant="outlined"
          sx={{
            p: 1,
            my: 2,
            bgcolor: '#f5f5f5',
            fontFamily: 'monospace',
            whiteSpace: 'pre-wrap',
            fontSize: 14,
          }}
        >
          {attachedCode}
        </Paper>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
          <Typography variant="body2" fontWeight="bold">
            {user.username}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
