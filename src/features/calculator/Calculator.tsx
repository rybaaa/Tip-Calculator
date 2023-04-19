import React from 'react'
import s from './Calculator.module.scss'

export function Calculator() {
  return (
    <div className={s.container}>
      <div className={s.dataBlock}>1</div>
      <div className={s.resultsBlock}>2</div>
    </div>
  )
}
