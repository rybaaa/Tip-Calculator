import React from 'react'
import { useDispatch } from 'react-redux'
import s from './TipsButtons.module.scss'
import { CommonTipsButtons } from '../../common/components/CommonTipsButtons/CommonTipsButtons'
import { useAppSelector } from '../../app/store'
import {
  changeCustomTipAC,
  customTipSelector,
  tipsSelector,
  toggleValueIsChangedAC,
  valueIsChangedSelector,
} from '../../features/Main/Calculator/calculator-reducer'

export function TipsButtons() {
  const dispatch = useDispatch()
  const tips = useAppSelector(tipsSelector)
  const customTip = useAppSelector(customTipSelector)
  const valueIsChanged = useAppSelector(valueIsChangedSelector)

  const changeTips = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.value && +e.currentTarget.value <= 200) {
      if (valueIsChanged) {
        dispatch(changeCustomTipAC({ tip: e.currentTarget.value }))
      } else {
        dispatch(changeCustomTipAC({ tip: e.currentTarget.value }))
        dispatch(toggleValueIsChangedAC({ isChanged: true }))
      }
    } else {
      e.preventDefault()
    }
  }

  const buttons = tips.map((el) => <CommonTipsButtons key={el} tip={el} />)
  return (
    <div className={s.wrapper}>
      <span className={s.title}>Select Tip %</span>
      <div className={s.tipsTypes}>
        {buttons}
        <input
          type="number"
          className={s.input}
          value={customTip}
          placeholder="Custom"
          onInput={changeTips}
        />
      </div>
    </div>
  )
}
