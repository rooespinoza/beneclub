import React from 'react'
import styles from './button.module.scss'
import classnames from 'classnames'

const Button = ({children, primary, secondary,onClick,type,disabled,id,icon,color}) =>{
    const buttonClass = classnames({
        primary,
        icon,
        color,
        secondary
      })
      return <button className={styles[buttonClass]} onClick={onClick} type={type} disabled={disabled} id={id} >{children}</button>
}
export default Button