import { useCallback, useEffect, useMemo, useState } from 'react';
import { Todo } from '../types';
import TodoApi from '../../../services/todos';
import { TodoFormValues } from '../components/TodoForm';

export type TodoStatus = 'All' | 'Completed' | 'Incompleted';

const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [status, setStatus] = useState<TodoStatus>('All');

  const getTodos = useCallback(async () => {
    // fetch todos
    await TodoApi.getTodos({ page: 1, limit: 10 }).then(response => {
      setTodos(response);
    });
  }, []);

  useEffect(() => {
    getTodos();
  }, []);

  const handleCreateTodo = useCallback(async (values: TodoFormValues) => {
    // create todo
    await TodoApi.createTodo({
      ...values,
    }).then(response => {
      setTodos(prev => [{ ...response, completed: false }, ...prev]);
    });
  }, []);

  const handleToggleTodo = useCallback(async (id: string) => {
    await TodoApi.toggleTodo(id).then(response => {
      setTodos(prev =>
        prev.map(todo =>
          todo.id === response.id
            ? { ...todo, completed: response.completed }
            : todo,
        ),
      );
    });
  }, []);

  const handleDeleteTodo = useCallback(async (id: string) => {
    await TodoApi.deleteTodo(id).then(response => {
      setTodos(prev => prev.filter(todo => todo.id !== response.id));
    });
  }, []);

  const handleFilter = useCallback((status: TodoStatus) => {
    setStatus(status);
  }, []);

  const filteredTodos = useMemo(
    () =>
      todos.filter(todo => {
        if (status === 'All') return true;
        if (status === 'Completed') return todo.completed;
        if (status === 'Incompleted') return !todo.completed;
        return true;
      }),
    [status, todos],
  );

  return {
    todos: filteredTodos,
    handleCreateTodo,
    handleDeleteTodo,
    handleToggleTodo,
    status,
    handleFilter,
  };
};

export default useTodos;
