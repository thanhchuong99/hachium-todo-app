import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { FC, memo } from 'react';
import { useForm } from 'react-hook-form';
import { Todo } from '../types';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Form from '../../../components/Form';

export type TodoFormValues = Omit<Todo, 'id' | 'completed'>;

interface TodoFormProps {
  open: boolean;
  handleClose: () => void;
  handleCreateTodo: (value: TodoFormValues) => Promise<void>;
}

export const todoSchema: yup.ObjectSchema<TodoFormValues> = yup.object().shape({
  title: yup.string().trim().required('Title is required.'),
});

const TodoForm: FC<TodoFormProps> = memo(
  ({ open, handleClose, handleCreateTodo }) => {
    const { control, handleSubmit } = useForm<TodoFormValues>({
      defaultValues: { title: '' },
      resolver: yupResolver(todoSchema),
    });

    const onSubmit = async (values: TodoFormValues) => {
      await handleCreateTodo(values);
      handleClose();
    };

    return (
      <Dialog
        open={open}
        maxWidth="md"
        fullWidth
        onClose={handleClose}
        PaperProps={{
          sx: {
            borderRadius: 2,
          },
        }}
      >
        <DialogTitle
          sx={{
            padding: 3,
            paddingBottom: 2,
          }}
        >
          Create Task
        </DialogTitle>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            <Form.TextField
              control={control}
              name="title"
              label="Title"
              size="medium"
              sx={{ width: '100%' }}
            />
          </DialogContent>
          <DialogActions
            sx={{
              padding: 3,
              justifyContent: {
                xs: 'center',
                md: 'flex-end',
              },
            }}
          >
            <Button
              color="secondary"
              variant="contained"
              onClick={handleClose}
              sx={{
                height: '40px',
                backgroundColor: 'grey.100',
                color: 'black',
              }}
            >
              Cancel
            </Button>
            <Form.SubmitButton
              control={control}
              variant="contained"
              type="submit"
            >
              Create
            </Form.SubmitButton>
          </DialogActions>
        </Form>
      </Dialog>
    );
  },
);

export default TodoForm;
