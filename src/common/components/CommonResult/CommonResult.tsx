import React from 'react'
import s from './CommonResult.module.scss'

type CommonResultType = {
  title: string
  price: string
  people: number
}

export const CommonResult = React.memo(({ title, price, people }: CommonResultType) => (
  <div className={s.wrapper}>
    <div className={s.titleBlock}>
      <p className={s.nameTitle}>{title}</p>
      <p className={s.perPerson}>/ person</p>
    </div>
    <div className={s.price}>{people ? `$${price}` : '$0.00'}</div>
  </div>
))
