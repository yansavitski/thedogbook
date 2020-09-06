import './UploadForm.scss'

import classNames from 'classnames'
import { Button } from 'components/Button/Button'
import React, { ChangeEvent, useCallback, useRef as useReference } from 'react'
import { FiUpload as UploadIcon } from 'react-icons/fi'

interface UploadFormProps {
  className?: string
  disabled?: boolean
  onLoadFile: (event: ChangeEvent<HTMLInputElement>) => void
}

export const UploadForm: React.FunctionComponent<UploadFormProps> = React.memo(
  ({ className, onLoadFile, disabled = false }: UploadFormProps) => {
    const fileInputReference = useReference<HTMLInputElement>(null)
    const handleUploadClick = useCallback(() => {
      fileInputReference.current?.click()
    }, [fileInputReference])

    return (
      <form className={classNames('UploadForm', className)}>
        <input
          className="UploadForm-input"
          type="file"
          name="fileToUpload"
          accept="image/*"
          ref={fileInputReference}
          onChange={onLoadFile}
          disabled={disabled}
        />

        <Button
          className="UploadForm-button"
          onClick={handleUploadClick}
          disabled={disabled}
        >
          <>
            <UploadIcon
              size={24}
              className="UploadForm-icon"
              title="Upload image"
            />
            Upload Image
          </>
        </Button>
      </form>
    )
  },
)

UploadForm.displayName = 'UploadForm'
