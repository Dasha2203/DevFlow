import { Link } from 'react-router';
import Editor from '@monaco-editor/react';
import { Person2 as Person2Icon } from '@mui/icons-material';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { Post } from '@api/types';
import { useAppSelector } from '@app/store/hooks';
import { PostCardFooter } from './components/post-card-footer';

export const PostCard = ({ id, code, language, marks, user: author }: Post) => {
  const { user } = useAppSelector((state) => state.user);

  return (
    <Card>
      <CardActionArea component={Link} to={`/posts/${id}`}>
        <Editor
          height="200px"
          defaultLanguage={language}
          defaultValue={code}
          theme="vs-dark"
          options={{
            readOnly: true,
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <Person2Icon /> {author.username}
          </Typography>
          <Typography>{language}</Typography>
        </CardContent>
      </CardActionArea>
      <PostCardFooter
        marks={marks}
        user={user}
        id={id}
        isAuthor={author.id === user?.id}
      />
    </Card>
  );
};
