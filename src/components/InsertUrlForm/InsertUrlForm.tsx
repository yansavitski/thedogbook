import './InsertUrlForm.scss'

import classNames from 'classnames'
import { Button } from 'components/Button/Button'
import React, { ChangeEvent, useCallback, useState } from 'react'

interface InsertUrlFormProps {
  className?: string
  disabled?: boolean
  onSubmit: (text: string) => void
}

export const InsertUrlForm: React.FunctionComponent<InsertUrlFormProps> = ({
  className,
  disabled = false,
  onSubmit,
}: InsertUrlFormProps) => {
  const [showInput, setShowInput] = useState<boolean>(false)
  const [text, setText] = useState<string>('')
  const hasText = Boolean(text)
  const handleMouseEnter = useCallback(() => {
    setShowInput(true)
  }, [setShowInput])
  const handleMouseLeave = useCallback(() => {
    if (!hasText) {
      setShowInput(false)
    }
  }, [text, setShowInput])
  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setText(event.target.value)
    },
    [setText],
  )
  const handleSubmit = useCallback(() => {
    if (hasText) {
      onSubmit(text)
      setText('')
    }
  }, [text, setText, onSubmit])

  return (
    <form
      className={classNames('InsertUrlForm', className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <input
        className={classNames(
          'InsertUrlForm-input',
          showInput && 'InsertUrlForm-input_show',
        )}
        type="text"
        placeholder="Please insert url to image"
        disabled={disabled}
        onChange={handleInputChange}
        value={text}
      />

      <Button
        className={classNames(
          'InsertUrlForm-submitButton',
          showInput && 'InsertUrlForm-submitButton_show',
        )}
        onClick={handleSubmit}
      >
        Insert URL to image
      </Button>
    </form>
  )
}
