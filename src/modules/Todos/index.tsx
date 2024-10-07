import { memo, useState } from 'react';
import TodoFilter from './components/TodoFilter';
import TodoList from './components/TodoList';

import useTodos from './hooks/useTodos';
import { Box, Button, Typography } from '@mui/material';
import TodoForm from './components/TodoForm';

const Todos = memo(() => {
  const {
    todos,
    handleCreateTodo,
    handleDeleteTodo,
    handleToggleTodo,
    status,
    handleFilter,
  } = useTodos();
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  return (
    <>
      <TodoFilter status={status} handleFilter={handleFilter} />
      <Box
        sx={{
          margin: '20px auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '70%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            marginBottom: '20px',
          }}
        >
          <Typography variant="h4">Tasks</Typography>
          <Typography variant="h6">Total: {todos.length}</Typography>
          <Button variant="contained" onClick={() => setOpenDialog(true)}>
            Add Task
          </Button>
        </Box>
        <TodoList
          todos={todos}
          handleToggleTodo={handleToggleTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
        {openDialog && (
          <TodoForm
            open={openDialog}
            handleClose={() => setOpenDialog(false)}
            handleCreateTodo={handleCreateTodo}
          />
        )}
      </Box>
    </>
  );
});

export default Todos;
