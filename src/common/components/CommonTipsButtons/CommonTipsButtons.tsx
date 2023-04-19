import React from 'react'
import { useDispatch } from 'react-redux'
import s from './CommonTipsButtons.module.scss'
import {
  currentTipSelector,
  setCurrentTipAC,
} from '../../../features/Main/Calculator/calculator-reducer'
import { useAppSelector } from '../../../app/store'

type CommonTipsButtonsType = {
  tip: number
}

export function CommonTipsButtons({ tip }: CommonTipsButtonsType) {
  const dispatch = useDispatch()
  const currentTip = useAppSelector(currentTipSelector)
  const changeTips = (newTip: number) => {
    dispatch(setCurrentTipAC({ tip: newTip }))
  }
  const btnClassName = currentTip === tip ? s.currentBtn : s.button
  return (
    <button
      onClick={() => {
        changeTips(tip)
      }}
      type="button"
      className={btnClassName}
    >
      {tip}%
    </button>
  )
}
