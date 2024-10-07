import { FC, memo, useCallback, useState } from 'react';
import { Todo } from '../types';
import { Box, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';

interface TodoItemProps {
  todo: Todo;
  handleDeleteTodo: (id: string) => Promise<void>;
  handleToggleTodo: (id: string) => Promise<void>;
}

const TodoItem: FC<TodoItemProps> = memo(
  ({ todo, handleDeleteTodo, handleToggleTodo }) => {
    const [loading, setLoading] = useState(false);

    const deleteTodo = useCallback(async () => {
      try {
        setLoading(true);
        await handleDeleteTodo(todo.id);
      } finally {
        setLoading(false);
      }
    }, [handleDeleteTodo, todo.id]);

    return (
      <Box
        sx={{
          padding: '20px 10px',
          borderRadius: '5px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          backgroundColor: 'white',
          width: '100%',
          '&:hover': {
            backgroundColor: '#f9f9f9',
          },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: '20px',
        }}
      >
        <Checkbox
          checked={todo.completed}
          disabled={loading || todo.completed}
          inputProps={{ 'aria-label': 'complete task' }}
          onChange={() => handleToggleTodo(todo.id)}
        />
        {todo.title}

        <LoadingButton
          loading={loading}
          color="error"
          variant="contained"
          type="submit"
          sx={{ marginLeft: 'auto', marginRight: '20px' }}
          onClick={deleteTodo}
        >
          Delete
        </LoadingButton>
      </Box>
    );
  },
);

export default TodoItem;
