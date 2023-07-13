import { QueryKey, useMutation, useQueryClient } from '@tanstack/react-query'
import { todosApi } from 'shared/api'

export interface UseChangeStatusParams {
  invalidateQueriesKeys?: QueryKey[]
}

export const useChangeStatus = ({ invalidateQueriesKeys }: UseChangeStatusParams) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (...params: Parameters<typeof todosApi.queries.changeTodoStatus>) =>
      todosApi.queries.changeTodoStatus(...params),
    onSuccess: () => {
      invalidateQueriesKeys?.forEach((invalidateQueryKey) =>
        queryClient.invalidateQueries(invalidateQueryKey),
      )
    },
  })
}
