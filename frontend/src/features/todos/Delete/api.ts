import { useMutation, useQueryClient } from '@tanstack/react-query'
import { todosApi } from 'shared/api'

export const useDeleteTodo = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (...params: Parameters<typeof todosApi.queries.deleteTodo>) =>
      todosApi.queries.deleteTodo(...params),
    onSuccess: () => {
      queryClient.invalidateQueries(todosApi.queryKeys.TODOS_LIST_QUERY_KEY)
    },
  })
}
