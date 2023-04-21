import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootStateType } from '../../../app/store'

const initialState = {
  bill: '' as string,
  tips: ['5', '10', '15', '25', '50'] as string[],
  customTip: '' as string,
  currentTip: '' as string,
  peopleNumber: '' as string,
  valueIsChanged: false,
  isActiveResetButton: false,
}

const slice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setCurrentTipAC(state, action: PayloadAction<{ tip: string }>) {
      state.currentTip = action.payload.tip
    },
    changeBillAC(state, action: PayloadAction<{ bill: string }>) {
      state.bill = action.payload.bill
    },
    changePersonsNumberAC(state, action: PayloadAction<{ number: string }>) {
      state.peopleNumber = action.payload.number
    },
    toggleValueIsChangedAC(state, action: PayloadAction<{ isChanged: boolean }>) {
      state.valueIsChanged = action.payload.isChanged
      state.isActiveResetButton = true
    },
    changeCustomTipAC(state, action: PayloadAction<{ tip: string }>) {
      state.currentTip = action.payload.tip
      state.customTip = action.payload.tip
    },
    toggleResetButtonAC(state, action: PayloadAction<{ isActive: boolean }>) {
      state.isActiveResetButton = action.payload.isActive
    },
    resetValuesAC(state) {
      state.bill = ''
      state.currentTip = ''
      state.customTip = ''
      state.peopleNumber = ''
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
