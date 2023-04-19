import React from 'react'
import s from './CommonInput.module.scss'

type CommonInputType = {
  label: string
  value: number
  icon: string
}

export function CommonInput({ label, value, icon }: CommonInputType) {
  return (
    <div className={s.wrapper}>
      <label className={s.label} htmlFor="input">
        {label}
      </label>
      <div className={s.inputBlock}>
        <input value={value} className={s.input} type="text" id="input" />
        <img className={s.dollarIcon} src={icon} alt="dollar" />
      </div>
    </div>
  )
}
