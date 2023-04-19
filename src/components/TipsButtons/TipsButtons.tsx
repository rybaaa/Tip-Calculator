import React from 'react'
import s from './TipsButtons.module.scss'
import { CommonTipsButtons } from '../../common/components/CommonTipsButtons/CommonTipsButtons'
import { useAppSelector } from '../../app/store'
import { customTipSelector, tipsSelector } from '../../features/Main/Calculator/calculator-reducer'

export function TipsButtons() {
  const tips = useAppSelector(tipsSelector)
  const customTip = useAppSelector(customTipSelector)

  const buttons = tips.map((el) => <CommonTipsButtons key={el} tip={el} />)
  return (
    <div className={s.wrapper}>
      <span className={s.title}>Select Tip %</span>
      <div className={s.tipsTypes}>
        {buttons}
        <input className={s.input} value={customTip} placeholder="Custom" />
      </div>
    </div>
  )
}
