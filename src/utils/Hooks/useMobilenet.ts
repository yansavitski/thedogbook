import * as mobilenet from '@tensorflow-models/mobilenet'
import { useEffect, useState } from 'react'

let modelStatic: mobilenet.MobileNet

export interface Prediction {
  className: string
  probability: number
}

export const useMobilenet = (): mobilenet.MobileNet => {
  const [modelInstance, setModelInstance] = useState<mobilenet.MobileNet>(
    modelStatic,
  )

  useEffect(() => {
    const hasModelStatic = Boolean(modelStatic)

    if (!hasModelStatic) {
      mobilenet
        .load()
        .then((model: mobilenet.MobileNet) => {
          modelStatic = model
          setModelInstance(model)
        })
        .catch((error: Error) => {
          if (IS_DEVELOP) {
            // eslint-disable-next-line no-console
            console.error(error)
          }
        })
    }
  }, [])

  return modelInstance
}
