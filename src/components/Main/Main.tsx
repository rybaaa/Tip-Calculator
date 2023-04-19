import React from 'react'
import s from './Main.module.scss'
import logo from '../../assets/logo.svg'
import { Calculator } from '../../features/calculator/Calculator'

export function Main() {
  return (
    <div className={s.container}>
      <img src={logo} alt="logo" />
      <Calculator />
    </div>
  )
}
