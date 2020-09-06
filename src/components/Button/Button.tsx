import './Button.scss'

import classNames from 'classnames'
import React, { PointerEvent } from 'react'

interface ButtonProps {
  children: string | React.ReactElement
  className?: string
  disabled?: boolean
  onClick?: (event: PointerEvent<HTMLButtonElement>) => void
  type?: 'button' | 'submit'
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  className,
  disabled,
  children,
  type = 'button',
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        'Button',
        className,
        Boolean(disabled) && 'Button_disabled',
      )}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
