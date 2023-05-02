import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootStateType } from '../../../app/store'

const initialState = {
  bill: 0 as number,
  tips: [5, 10, 15, 25, 50] as number[],
  customTip: 0 as number,
  currentTip: 0 as number,
  peopleNumber: 0 as number,
  valueIsChanged: false,
  isActiveResetButton: false,
}

const slice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setCurrentTipAC(state, action: PayloadAction<{ tip: number }>) {
      state.currentTip = action.payload.tip
    },
    changeBillAC(state, action: PayloadAction<{ bill: number }>) {
      state.bill = action.payload.bill
    },
    changePersonsNumberAC(state, action: PayloadAction<{ number: number }>) {
      state.peopleNumber = action.payload.number
    },
    toggleValueIsChangedAC(state, action: PayloadAction<{ isChanged: boolean }>) {
      state.valueIsChanged = action.payload.isChanged
      state.isActiveResetButton = true
    },
    changeCustomTipAC(state, action: PayloadAction<{ tip: number }>) {
      state.currentTip = action.payload.tip
      state.customTip = action.payload.tip
    },
    toggleResetButtonAC(state, action: PayloadAction<{ isActive: boolean }>) {
      state.isActiveResetButton = action.payload.isActive
    },
    resetValuesAC(state) {
      state.bill = 0
      state.currentTip = 0
      state.customTip = 0
      state.peopleNumber = 0
    },
  },
})

export const calculatorReducer = slice.reducer

export const {
  setCurrentTipAC,
  changeBillAC,
  changePersonsNumberAC,
  toggleValueIsChangedAC,
  changeCustomTipAC,
  toggleResetButtonAC,
  resetValuesAC,
} = slice.actions

export const billSelector = (state: RootStateType) => state.calculator.bill
export const tipsSelector = (state: RootStateType) => state.calculator.tips
export const customTipSelector = (state: RootStateType) => state.calculator.customTip
export const peopleNumberSelector = (state: RootStateType) => state.calculator.peopleNumber
export const currentTipSelector = (state: RootStateType) => state.calculator.currentTip
export const valueIsChangedSelector = (state: RootStateType) => state.calculator.valueIsChanged
export const isActiveResetButtonSelector = (state: RootStateType) =>
  state.calculator.isActiveResetButton
