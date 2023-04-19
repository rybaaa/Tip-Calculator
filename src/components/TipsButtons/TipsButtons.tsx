import React from 'react'
import s from './TipsButtons.module.scss'
import { CommonTipsButtons } from '../../common/components/CommonTipsButtons/CommonTipsButtons'

export function TipsButtons() {
  const tips = [5, 10, 15, 25, 50]
  const buttons = tips.map((el) => <CommonTipsButtons key={el} tip={el} />)
  return (
    <div className={s.wrapper}>
      <span className={s.title}>Select Tip %</span>
      <div className={s.tipsTypes}>
        {buttons}
        <input className={s.input} value="" placeholder="Custom" />
      </div>
    </div>
  )
}
