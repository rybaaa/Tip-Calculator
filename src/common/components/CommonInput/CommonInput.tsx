import React, { ChangeEvent } from 'react'
import s from './CommonInput.module.scss'

type CommonInputType = {
  label: string
  value: number
  icon: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export function CommonInput({ label, value, icon, onChange }: CommonInputType) {
  return (
    <div className={s.wrapper}>
      <label className={s.label} htmlFor="input">
        {label}
      </label>
      <div className={s.inputBlock}>
        <input
          onChange={(e) => {
            onChange(e)
          }}
          value={value}
          className={s.input}
          type="text"
          id="input"
        />
        <img className={s.dollarIcon} src={icon} alt="dollar" />
      </div>
    </div>
  )
}
