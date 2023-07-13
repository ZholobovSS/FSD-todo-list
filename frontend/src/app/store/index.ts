import { configureStore } from '@reduxjs/toolkit'
import { todosFilterReducer } from 'features/todos/Filters'

export const store = configureStore({
  reducer: {
    todosFiltersReducer: todosFilterReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
