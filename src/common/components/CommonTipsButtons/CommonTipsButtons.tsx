import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import s from './CommonTipsButtons.module.scss'
import {
  currentTipSelector,
  setCurrentTipAC,
  toggleResetButtonAC,
  toggleValueIsChangedAC,
  valueIsChangedSelector,
} from '../../../features/Main/Calculator/calculator-reducer'
import { useAppSelector } from '../../../app/store'

type CommonTipsButtonsType = {
  tip: number
}

export const CommonTipsButtons = React.memo(({ tip }: CommonTipsButtonsType) => {
  const dispatch = useDispatch()
  const currentTip = useAppSelector(currentTipSelector)
  const valueIsChanged = useAppSelector(valueIsChangedSelector)

  const changeTips = useCallback((newTip: number) => {
    if (valueIsChanged) {
      dispatch(setCurrentTipAC({ tip: newTip }))
      dispatch(toggleResetButtonAC({ isActive: true }))
    } else {
      dispatch(setCurrentTipAC({ tip: newTip }))
      dispatch(toggleValueIsChangedAC({ isChanged: true }))
    }
  }, [])
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
})
