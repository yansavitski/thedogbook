import './App.scss'

import { Card } from 'components/Card/Card'
import { ClassifyImageForm } from 'components/ClassifyImageForm/ClassifyImageForm'
import { Gallery } from 'components/Gallery/Gallery'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { compose } from 'redux'
import {
  selectDogClassifyBreed,
  selectDogClassifyStatus,
} from 'store/dogClassify/selectors'
import { DogClassifyStatus } from 'store/dogClassify/types'
import { loadDogsByBreed } from 'store/dogs/actions'
import { selectDogsByBreed } from 'store/dogs/selectors'
import { Dog } from 'store/dogs/types'
import { withLoadBreeds } from 'utils/HOCs/withLoadBreeds/withLoadBreeds'

export const App = compose<React.FunctionComponent>(withLoadBreeds)(() => {
  const dispatch = useDispatch()
  const currentBreed = useSelector(selectDogClassifyBreed)
  const dogStatus = useSelector(selectDogClassifyStatus)
  const dogs = useSelector(selectDogsByBreed)

  useEffect(() => {
    if (dogStatus === DogClassifyStatus.succeeded && currentBreed !== null) {
      dispatch(loadDogsByBreed(currentBreed))
    }
  }, [currentBreed, dogStatus, dispatch])

  return (
    <main className="App">
      <h1 className="App-title">Dogbook</h1>

      <ClassifyImageForm className="App-upload" />

      <Gallery className="App-gallery">
        <>
          {Boolean(currentBreed) && (
            <h3 className="App-galleryTitle">Gallery with same breed</h3>
          )}

          {dogs.map(({ id, url }: Dog) => (
            <Card key={id} url={url} />
          ))}
        </>
      </Gallery>
    </main>
  )
})
