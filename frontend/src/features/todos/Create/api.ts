import { useMutation, useQueryClient } from '@tanstack/react-query'
import { todosApi } from 'shared/api'

export const useCreateMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (...params: Parameters<typeof todosApi.queries.createTodo>) =>
      todosApi.queries.createTodo(...params),
    onSuccess() {
      queryClient.invalidateQueries(todosApi.queryKeys.TODOS_LIST_QUERY_KEY)
    },
  })
}
