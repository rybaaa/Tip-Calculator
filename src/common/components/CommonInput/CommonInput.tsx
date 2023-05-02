import React from 'react'
import s from './CommonInput.module.scss'

type CommonInputType = {
  label: string
  value: string
  icon: string
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
  isChanged: boolean
}

export function CommonInput({ label, value, icon, onChange, isChanged }: CommonInputType) {
  const id = label
  return (
    <div className={s.wrapper}>
      <label className={s.label} htmlFor={id}>
        {label}
      </label>
      <div className={s.inputBlock}>
        <input
          onInput={(e) => {
            onChange(e)
          }}
          value={value}
          className={isChanged && !value ? `${s.input} ${s.inputWithError}` : s.input}
          id={id}
          placeholder="0"
        />
        <img className={s.dollarIcon} src={icon} alt="dollar" />
        <span className={isChanged && !value ? s.errorVisible : s.error}>Can&apos;t be zero</span>
      </div>
    </div>
  )
}
