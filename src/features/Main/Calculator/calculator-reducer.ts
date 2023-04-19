import { createSlice } from '@reduxjs/toolkit'

export type StatusType = 'idle' | 'loading' | 'success' | 'failed'

const initialState = {}

const slice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {},
})

export const appReducer = slice.reducer

export const {} = slice.actions
