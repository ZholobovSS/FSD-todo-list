import { Todo } from 'shared/model'
import { api } from '../base'

export const getTodos = () => api.get('todos').json<Todo[]>()

export const getTodoById = ({ id }: Pick<Todo, 'id'>) => api.get(`todos/${id}`).json<Todo>()

export const deleteTodo = ({ id }: Pick<Todo, 'id'>) => api.delete(`todos/${id}`)

export const createTodo = ({ title }: Pick<Todo, 'title'>) =>
  api.post(`todos`, {
    json: {
      title,
      status: false,
    },
  })

export const changeTodoStatus = ({ id, status }: Pick<Todo, 'id' | 'status'>) =>
  api.patch(`todos/${id}`, {
    json: {
      status,
    },
  })
