import React, { ChangeEvent } from 'react'
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
  peopleNumberSelector,
} from './calculator-reducer'

export function Calculator() {
  const dispatch = useDispatch()
  const bill = useAppSelector(billSelector)
  const peopleNumber = useAppSelector(peopleNumberSelector)
  const tips = useAppSelector(currentTipSelector)
  // const totalFee = useAppSelector(totalFeeSelector).toFixed(2)
  // const totalTips = useAppSelector(totalTipsSelector).toFixed(2)
  const tipsFee = (bill * tips) / 100
  const totalFee = bill + tipsFee

  const changeBill = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeBillAC({ bill: +e.currentTarget.value }))
  }
  const changePersonsNumber = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changePersonsNumberAC({ number: +e.currentTarget.value }))
  }
  return (
    <div className={s.container}>
      <div className={s.dataBlock}>
        <CommonInput value={bill} label="Bill" icon={dollar} onChange={changeBill} />
        <TipsButtons />
        <CommonInput
          value={peopleNumber}
          label="Number of People"
          icon={person}
          onChange={changePersonsNumber}
        />
      </div>
      <div className={s.resultsBlock}>
        <div className={s.results}>
          <CommonResult price={tipsFee / peopleNumber} title="Tip Amount" />
          <CommonResult price={totalFee / peopleNumber} title="Total" />
        </div>
        <button className={s.button} type="button">
          RESET
        </button>
      </div>
    </div>
  )
}
