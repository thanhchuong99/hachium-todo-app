import { Box, Button, ButtonGroup } from '@mui/material';
import { FC, memo } from 'react';
import { TodoStatus } from '../hooks/useTodos';

interface TodoFilterProps {
  status: TodoStatus;
  handleFilter: (status: TodoStatus) => void;
}

const TodoFilter: FC<TodoFilterProps> = memo(({ status, handleFilter }) => {
  const buttons: { label: string; value: TodoStatus }[] = [
    { label: 'All', value: 'All' },
    { label: 'Completed', value: 'Completed' },
    { label: 'Incompleted', value: 'Incompleted' },
  ];

  return (
    <Box
      sx={{
        margin: '20px auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ButtonGroup
        variant="contained"
        aria-label="Filter button group"
        sx={{
          '& .MuiButton-root:not(:last-child)': {
            borderRight: '2px solid white',
          },
        }}
      >
        {buttons.map(button => (
          <Button
            key={button.value}
            variant={status === button.value ? 'outlined' : 'contained'}
            sx={{ height: 42, width: 154 }}
            onClick={() => handleFilter(button.value)}
          >
            {button.label}
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  );
});

export default TodoFilter;
