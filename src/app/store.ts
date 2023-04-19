import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { combineReducers } from 'redux'
import { calculatorReducer } from '../features/Main/Calculator/calculator-reducer'

export const rootReducer = combineReducers({
  calculator: calculatorReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type RootStateType = ReturnType<typeof rootReducer>

export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector
