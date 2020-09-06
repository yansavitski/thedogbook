import './Loading.scss'

import classNames from 'classnames'
import React from 'react'
import { AiOutlineLoading3Quarters as Spinner } from 'react-icons/ai'

const DEFAULT_SIZE = 24

interface LoadingProps {
  className?: string
  size?: number
}

export const Loading: React.FunctionComponent<LoadingProps> = ({
  className,
  size = DEFAULT_SIZE,
}: LoadingProps) => (
  <div className={classNames('Loading', className)}>
    <Spinner className="Loading-spinner" size={size} />
  </div>
)
