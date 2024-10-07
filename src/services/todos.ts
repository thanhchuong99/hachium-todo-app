import axios from 'axios';
import { Todo } from '../modules/Todos/types';
import { TodoFormValues } from '../modules/Todos/components/TodoForm';

class TodoApi {
  static async getTodos({
    page = 1,
    limit = 1000,
  }: {
    page?: number;
    limit?: number;
    isCompleted?: boolean;
  }): Promise<Todo[]> {
    const response = await axios.get(
      'https://6703a70dab8a8f8927310bb9.mockapi.io/api/todo',
      {
        params: {
          limit,
          page,
        },
      },
    );
    return response.data;
  }

  static async createTodo({ title }: TodoFormValues): Promise<Todo> {
    const response = await axios.post(
      'https://6703a70dab8a8f8927310bb9.mockapi.io/api/todo',
      {
        title,
      },
    );
    return response.data;
  }

  static async toggleTodo(id: string): Promise<Todo> {
    const response = await axios.put(
      `https://6703a70dab8a8f8927310bb9.mockapi.io/api/todo/${id}`,
      {
        completed: true,
      },
    );
    return response.data;
  }

  static async deleteTodo(id: string): Promise<Todo> {
    const response = await axios.delete(
      `https://6703a70dab8a8f8927310bb9.mockapi.io/api/todo/${id}`,
    );
    return response.data;
  }
}

export default TodoApi;
