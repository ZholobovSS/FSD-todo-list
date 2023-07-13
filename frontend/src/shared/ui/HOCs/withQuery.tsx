import { QueryObserverBaseResult } from '@tanstack/react-query'
import React from 'react'
import { Spinner, withCenterLayout } from 'shared/ui'
import { ShowRequestError } from '../ShowRequestError'

type WithQueryProps = Pick<QueryObserverBaseResult, 'isError' | 'isLoading' | 'error' | 'refetch'>

export const withQuery =
  <P extends object>(WrappedComponent: React.ComponentType<P>) =>
  (props: WithQueryProps & P) => {
    const { isLoading, isError, error, refetch, ...rest } = props

    if (isError) {
      return withCenterLayout(ShowRequestError)({ error, refetch })
    }

    if (isLoading) {
      return withCenterLayout(Spinner)({})
    }

    return <WrappedComponent {...(rest as P)} />
  }
