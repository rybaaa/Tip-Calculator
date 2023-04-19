import React from 'react'
import s from './Calculator.module.scss'
import { CommonInput } from '../../../common/components/CommonInput/CommonInput'
import { TipsButtons } from '../../../components/TipsButtons/TipsButtons'
import dollar from '../../../assets/icon-dollar.svg'
import person from '../../../assets/icon-person.svg'
import { CommonResult } from '../../../common/components/CommonResult/CommonResult'

export function Calculator() {
  return (
    <div className={s.container}>
      <div className={s.dataBlock}>
        <CommonInput value={0} label="Bill" icon={dollar} />
        <TipsButtons />
        <CommonInput value={0} label="Number of People" icon={person} />
      </div>
      <div className={s.resultsBlock}>
        <div className={s.results}>
          <CommonResult price="0.00" title="Tip Amount" />
          <CommonResult price="0.00" title="Total" />
        </div>
        <button className={s.button} type="button">
          RESET
        </button>
      </div>
    </div>
  )
}
