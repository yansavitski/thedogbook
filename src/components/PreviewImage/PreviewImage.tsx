import './PreviewImage.scss'

import classNames from 'classnames'
import React, { ChangeEvent } from 'react'
import { useSelector } from 'react-redux'
import { selectDogClassifyStatus } from 'store/dogClassify/selectors'
import { DogClassifyStatus } from 'store/dogClassify/types'

interface PreviewImageProps {
  className?: string
  onLoad: (event: ChangeEvent<HTMLImageElement>) => void
  prediction?: string
  url?: string
}

export const PreviewImage: React.FunctionComponent<PreviewImageProps> = React.memo(
  ({ className, onLoad, prediction, url }: PreviewImageProps) => {
    const dogClassifyStatus = useSelector(selectDogClassifyStatus)
    const hasUrl = Boolean(url)

    return hasUrl ? (
      <figure className={classNames('PreviewImage', className)}>
        <img
          className="PreviewImage-image"
          src={url}
          onLoad={onLoad}
          crossOrigin="anonymous"
          loading="lazy"
        />

        {dogClassifyStatus !== DogClassifyStatus.idle && (
          <figcaption className="PreviewImage-caption">
            {dogClassifyStatus === DogClassifyStatus.classifying &&
              'Classifying breed...'}
            {dogClassifyStatus === DogClassifyStatus.succeeded &&
              prediction !== undefined &&
              `Breed is ${prediction}`}
            {dogClassifyStatus === DogClassifyStatus.failed &&
              'Cannot detect breed'}
          </figcaption>
        )}
      </figure>
    ) : null
  },
)

PreviewImage.displayName = 'PreviewImage'
