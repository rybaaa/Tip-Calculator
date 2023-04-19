import React from 'react'
import s from './CommonTipsButtons.module.scss'

type CommonTipsButtonsType = {
  tip: number
}

export function CommonTipsButtons({ tip }: CommonTipsButtonsType) {
  return (
    <button type="button" className={s.wrapper}>
      {tip}%
    </button>
  )
}
