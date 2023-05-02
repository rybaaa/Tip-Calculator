import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import s from './TipsButtons.module.scss'
import { CommonTipsButtons } from '../../common/components/CommonTipsButtons/CommonTipsButtons'
import { useAppSelector } from '../../app/store'
import {
  changeCustomTipAC,
  customTipSelector,
  tipsSelector,
  toggleResetButtonAC,
  toggleValueIsChangedAC,
  valueIsChangedSelector,
} from '../../features/Main/Calculator/calculator-reducer'

export const TipsButtons = React.memo(() => {
  const dispatch = useDispatch()
  const tips = useAppSelector(tipsSelector)
  const customTip = useAppSelector(customTipSelector)
  const valueIsChanged = useAppSelector(valueIsChangedSelector)
  const regex = /^[0-9.]*$/

  const changeTips = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    if (
      regex.test(e.currentTarget.value) &&
      +e.currentTarget.value <= 200 &&
      e.currentTarget.value.length <= 6
    ) {
      if (valueIsChanged) {
        dispatch(changeCustomTipAC({ tip: e.currentTarget.value }))
        dispatch(toggleResetButtonAC({ isActive: true }))
      } else {
        dispatch(changeCustomTipAC({ tip: e.currentTarget.value }))
        dispatch(toggleValueIsChangedAC({ isChanged: true }))
      }
    } else {
      e.preventDefault()
    }
  }, [])

  const buttons = tips.map((el) => <CommonTipsButtons key={el} tip={el} />)

  return (
    <div className={s.wrapper}>
      <span className={s.title}>Select Tip %</span>
      <div className={s.tipsTypes}>
        {buttons}
        <input className={s.input} value={customTip} placeholder="Custom" onInput={changeTips} />
      </div>
    </div>
  )
})
