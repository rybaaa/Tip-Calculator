import { createSlice, PayloadAction } from '@reduxjs/toolkit'
/* eslint-disable import/no-cycle */
import { RootStateType } from '../../../app/store'

const initialState = {
  bill: 0 as number,
  tips: [5, 10, 15, 25, 50] as number[],
  customTip: '' as string,
  currentTip: 0 as number,
  peopleNumber: 0 as number,
  totalFee: 0 as number,
  totalTips: 0 as number,
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
  },
})

export const calculatorReducer = slice.reducer

export const { setCurrentTipAC, changeBillAC, changePersonsNumberAC } = slice.actions

export const billSelector = (state: RootStateType) => state.calculator.bill
export const tipsSelector = (state: RootStateType) => state.calculator.tips
export const customTipSelector = (state: RootStateType) => state.calculator.customTip
export const peopleNumberSelector = (state: RootStateType) => state.calculator.peopleNumber
export const totalFeeSelector = (state: RootStateType) => state.calculator.totalFee
export const totalTipsSelector = (state: RootStateType) => state.calculator.totalTips
export const currentTipSelector = (state: RootStateType) => state.calculator.currentTip
