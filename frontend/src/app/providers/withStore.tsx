import { FC } from 'react'
import { Provider } from 'react-redux'
// eslint-disable-next-line boundaries/element-types
import { store } from 'app/store'

export const withStore = (WrappedComponent: FC) => () =>
  (
    <Provider store={store}>
      <WrappedComponent />
    </Provider>
  )
