import { QueryKey } from '@tanstack/react-query'
import { Todo } from 'shared/model'

export const TODOS_LIST_QUERY_KEY: QueryKey = ['TODOS_LIST_QUERY_KEY']
export const createTodoDetailQueryKey = ({ id }: Pick<Todo, 'id'>): QueryKey => [
  'TODO_DETAIL_QUERY_KEY',
  id,
]
