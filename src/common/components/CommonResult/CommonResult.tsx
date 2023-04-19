import React from 'react'
import s from './CommonResult.module.scss'

type CommonResultType = {
  title: string
  price: number
}

export function CommonResult({ title, price }: CommonResultType) {
  return (
    <div className={s.wrapper}>
      <div className={s.titleBlock}>
        <p className={s.nameTitle}>{title}</p>
        <p className={s.perPerson}>/ person</p>
      </div>
      <div className={s.price}>${price}</div>
    </div>
  )
}
