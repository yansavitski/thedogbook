import './ClassifyImageForm.scss'

import classNames from 'classnames'
import { InsertUrlForm } from 'components/InsertUrlForm/InsertUrlForm'
import { Loading } from 'components/Loading/Loading'
import { PreviewImage } from 'components/PreviewImage/PreviewImage'
import { UploadForm } from 'components/UploadForm/UploadForm'
import React, { ChangeEvent, useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  setClassifyDogFailed,
  setDogPredictionBreed,
} from 'store/dogClassify/actions'
import { Prediction, useMobilenet } from 'utils/Hooks/useMobilenet'

interface ClassifyImageFormProps {
  className?: string
  disabled?: boolean
}

export const ClassifyImageForm: React.FunctionComponent<ClassifyImageFormProps> = React.memo(
  ({ className }: ClassifyImageFormProps) => {
    const [prediction, setPrediction] = useState<string>()
    const [imageUrl, setImageUrl] = useState<string>()
    const model = useMobilenet()
    const hasModel = Boolean(model)
    const dispatch = useDispatch()
    const handleLoadFile = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        const url = window.URL.createObjectURL(event.target.files?.[0])

        setImageUrl(url)
      },
      [setImageUrl],
    )
    const handleImageClassify = useCallback(
      (event: ChangeEvent<HTMLImageElement>) => {
        if (hasModel) {
          model
            .classify(event.target, 1)
            .then((predictions: Prediction[]) => {
              setPrediction(predictions[0].className)

              dispatch(setDogPredictionBreed(predictions[0].className))
            })
            .catch(() => {
              dispatch(setClassifyDogFailed)
            })
        }
      },
      [model],
    )
    const handleInsertUrl = useCallback(
      (url: string) => {
        setImageUrl(url)
      },
      [setImageUrl],
    )

    return (
      <section className={classNames('ClassifyImageForm', className)}>
        {hasModel ? (
          <>
            <UploadForm
              className="ClassifyImageForm-uploadForm"
              onLoadFile={handleLoadFile}
              disabled={!hasModel}
            />

            <InsertUrlForm
              className="ClassifyImageForm-insertForm"
              onSubmit={handleInsertUrl}
              disabled={!hasModel}
            />

            <PreviewImage
              className="ClassifyImageForm-preview"
              url={imageUrl}
              onLoad={handleImageClassify}
              prediction={prediction}
            />
          </>
        ) : (
          <Loading />
        )}
      </section>
    )
  },
)

ClassifyImageForm.displayName = 'ClassifyImageForm'
