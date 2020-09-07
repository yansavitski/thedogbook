import './Gallery.scss'

import classNames from 'classnames'
import React from 'react'

interface GalleryProps {
  children: React.ReactElement
  className?: string
}

export const Gallery: React.FunctionComponent<GalleryProps> = ({
  className,
  children,
}: GalleryProps) => {
  return (
    <section className={classNames('Gallery', className)}>{children}</section>
  )
}
