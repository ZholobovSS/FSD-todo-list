import { ChangeStatusTodoFeature } from 'features/todos/ChangeStatus'
import { TodoCreateForm } from 'features/todos/Create'
import { DeleteTodoFeature } from 'features/todos/Delete'
import { TodosListItem } from 'entities/todos/ListItem'
import { todosApi } from 'shared/api'
import { withQuery } from 'shared/ui'
import { useTodosApi } from './api'

export const Todos = () => {
  const { todos, isLoading, isError, error, refetch } = useTodosApi()

  return withQuery(() => (
    <>
      <h1 className='text-center mb-4'>Todos page</h1>
      <TodoCreateForm />
      <ul className='list-group'>
        {todos.map((todo, index) => (
          <TodosListItem
            key={todo.id}
            {...todo}
            index={index}
            actions={
              <>
                <ChangeStatusTodoFeature
                  id={todo.id}
                  status={todo.status}
                  invalidateQueriesKeys={[todosApi.queryKeys.TODOS_LIST_QUERY_KEY]}
                />
                <DeleteTodoFeature id={todo.id} />
              </>
            }
          />
        ))}
      </ul>
    </>
  ))({ isError, isLoading, error, refetch })
}
