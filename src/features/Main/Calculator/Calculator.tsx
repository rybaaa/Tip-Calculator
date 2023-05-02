import React, { useCallback, useMemo } from 'react'
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

  const tipsFee = useMemo(() => (bill * tips) / 100, [bill, tips])
  const totalFee = useMemo(() => bill + tipsFee, [bill, tipsFee])
  const tipsFeePerPerson = useMemo(
    () => (tipsFee / peopleNumber).toFixed(2),
    [tipsFee, peopleNumber]
  )
  const totalFeePerPerson = useMemo(
    () => (totalFee / peopleNumber).toFixed(2),
    [totalFee, peopleNumber]
  )
  const regexForBill = /^[0-9.]*$/
  const regexForPersons = /^[0-9]*$/

  const changeBill = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    if (regexForBill.test(e.currentTarget.value) && e.currentTarget.value.length <= 7) {
      if (valueIsChanged) {
        dispatch(changeBillAC({ bill: +e.currentTarget.value }))
        dispatch(toggleResetButtonAC({ isActive: true }))
      } else {
        dispatch(changeBillAC({ bill: +e.currentTarget.value }))
        dispatch(toggleValueIsChangedAC({ isChanged: true }))
      }
    } else {
      e.preventDefault()
    }
  }, [])

  const changePersonsNumber = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    if (regexForPersons.test(e.currentTarget.value) && e.currentTarget.value.length <= 3) {
      if (valueIsChanged) {
        dispatch(changePersonsNumberAC({ number: +e.currentTarget.value }))
        dispatch(toggleResetButtonAC({ isActive: true }))
      } else {
        dispatch(changePersonsNumberAC({ number: +e.currentTarget.value }))
        dispatch(toggleValueIsChangedAC({ isChanged: true }))
      }
    } else {
      e.preventDefault()
    }
  }, [])

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
