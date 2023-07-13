import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { GoBack } from 'features/GoBack'
import { ChangeStatusTodoFeature } from 'features/todos/ChangeStatus'
import { DeleteTodoFeature } from 'features/todos/Delete'
import { TodoDetailCard } from 'entities/todos/Detail'
import { todosApi } from 'shared/api'
import { withQuery } from 'shared/ui'
import { useTodoDetailApi } from './api'

export const TodoDetail: FC = () => {
  const { id } = useParams()
  const { todo, isError, isLoading, error, refetch } = useTodoDetailApi({ id: id! })

  return withQuery(() => (
    <>
      <h1 className='text-center mb-4'>Todo page</h1>
      <TodoDetailCard
        {...todo!}
        actions={
          <>
            <GoBack />
            <ChangeStatusTodoFeature
              id={todo!.id}
              status={todo!.status}
              invalidateQueriesKeys={[
                todosApi.queryKeys.TODOS_LIST_QUERY_KEY,
                todosApi.queryKeys.createTodoDetailQueryKey({ id: todo!.id }),
              ]}
            />
            <DeleteTodoFeature goBack id={todo!.id} />
          </>
        }
      />
    </>
  ))({ isError, isLoading, error, refetch })
}
