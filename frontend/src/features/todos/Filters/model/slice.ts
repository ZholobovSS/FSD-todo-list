import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Filter } from './types'

const slice = createSlice({
  name: 'todosFilters',
  initialState: {
    filterType: '',
    name: '',
  },
  reducers: {
    setFilter(_, action: PayloadAction<Filter>) {
      return action.payload
    },
  },
})

export const { actions, reducer } = slice
