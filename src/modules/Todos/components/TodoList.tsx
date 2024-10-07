import { FC, memo } from 'react';
import { Todo } from '../types';
import { Box } from '@mui/material';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  handleToggleTodo: (id: string) => Promise<void>;
  handleDeleteTodo: (id: string) => Promise<void>;
}

const TodoList: FC<TodoListProps> = memo(
  ({ todos, handleToggleTodo, handleDeleteTodo }) => {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          width: '100%',
          border: '2px solid #ccc',
          padding: '20px 30px',
          borderRadius: '5px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          backgroundColor: 'white',
          gap: '10px',
          maxHeight: '670px',
          overflowY: 'auto',
        }}
      >
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleDeleteTodo={handleDeleteTodo}
            handleToggleTodo={handleToggleTodo}
          />
        ))}
      </Box>
    );
  },
);

export default TodoList;
