import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({})

export const store = configureStore({
  reducer: rootReducer,
})

export type RootStateType = ReturnType<typeof rootReducer>

export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector
