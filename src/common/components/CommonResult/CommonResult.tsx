import React from 'react'
import s from './CommonResult.module.scss'

type CommonResultType = {
  title: string
  price: string
  people: string
}

export function CommonResult({ title, price, people }: CommonResultType) {
  return (
    <div className={s.wrapper}>
      <div className={s.titleBlock}>
        <p className={s.nameTitle}>{title}</p>
        <p className={s.perPerson}>/ person</p>
      </div>
      <div className={s.price}>{people ? `$${price}` : '$0.00'}</div>
    </div>
  )
}
