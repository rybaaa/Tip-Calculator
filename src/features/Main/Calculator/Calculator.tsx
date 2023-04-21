import React from 'react'
import { useDispatch } from 'react-redux'
import s from './Calculator.module.scss'
import { CommonInput } from '../../../common/components/CommonInput/CommonInput'
import { TipsButtons } from '../../../components/TipsButtons/TipsButtons'
import dollar from '../../../assets/icon-dollar.svg'
import person from '../../../assets/icon-person.svg'
import { CommonResult } from '../../../common/components/CommonResult/CommonResult'
import { useAppSelector } from '../../../app/store'
import {
  billSelector,
  changeBillAC,
  changePersonsNumberAC,
  currentTipSelector,
  isActiveResetButtonSelector,
  peopleNumberSelector,
  resetValuesAC,
  toggleResetButtonAC,
  toggleValueIsChangedAC,
  valueIsChangedSelector,
} from './calculator-reducer'

export function Calculator() {
  const dispatch = useDispatch()
  const bill = useAppSelector(billSelector)
  const peopleNumber = useAppSelector(peopleNumberSelector)
  const tips = useAppSelector(currentTipSelector)
  const valueIsChanged = useAppSelector(valueIsChangedSelector)
  const resetButtonIsActive = useAppSelector(isActiveResetButtonSelector)

  const tipsFee = (+bill * +tips) / 100
  const totalFee = +bill + tipsFee
  const tipsFeePerPerson = (tipsFee / +peopleNumber).toFixed(2)
  const totalFeePerPerson = (totalFee / +peopleNumber).toFixed(2)

  const changeBill = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.value) {
      if (valueIsChanged) {
        dispatch(changeBillAC({ bill: e.currentTarget.value }))
      } else {
        dispatch(changeBillAC({ bill: e.currentTarget.value }))
        dispatch(toggleValueIsChangedAC({ isChanged: true }))
      }
    } else {
      e.preventDefault()
    }
  }

  const changePersonsNumber = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value)
    if (e.currentTarget.value) {
      if (valueIsChanged) {
        dispatch(changePersonsNumberAC({ number: e.currentTarget.value }))
      } else {
        dispatch(changePersonsNumberAC({ number: e.currentTarget.value }))
        dispatch(toggleValueIsChangedAC({ isChanged: true }))
      }
    } else {
      e.preventDefault()
    }
  }

  const resetValues = () => {
    dispatch(resetValuesAC())
    dispatch(toggleResetButtonAC({ isActive: false }))
  }
  return (
    <div className={s.container}>
      <div className={s.dataBlock}>
        <CommonInput
          label="Bill"
          icon={dollar}
          value={bill}
          onChange={changeBill}
          isChanged={valueIsChanged}
        />
        <TipsButtons />
        <CommonInput
          label="Number of People"
          value={peopleNumber}
          icon={person}
          onChange={changePersonsNumber}
          isChanged={valueIsChanged}
        />
      </div>
      <div className={s.resultsBlock}>
        <div className={s.results}>
          <CommonResult price={tipsFeePerPerson} title="Tip Amount" people={peopleNumber} />
          <CommonResult price={totalFeePerPerson} title="Total" people={peopleNumber} />
        </div>
        <button
          className={resetButtonIsActive ? s.button : `${s.button} ${s.buttonDisabled}`}
          type="button"
          onClick={resetValues}
        >
          RESET
        </button>
      </div>
    </div>
  )
}
