import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FC } from 'react'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

export const withTanStackQuery = (WrappedComponent: FC) => () =>
  (
    <QueryClientProvider client={queryClient}>
      <WrappedComponent />
    </QueryClientProvider>
  )
