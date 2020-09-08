import './App.scss'

import { Card } from 'components/Card/Card'
import { ClassifyImageForm } from 'components/ClassifyImageForm/ClassifyImageForm'
import { Gallery } from 'components/Gallery/Gallery'
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { compose } from 'redux'
import {
  selectDogClassifyBreed,
  selectDogClassifyStatus,
} from 'store/dogClassify/selectors'
import { DogClassifyStatus } from 'store/dogClassify/types'
import { loadDogsByBreed } from 'store/dogs/actions'
import {
  selectDogsByBreed,
  selectDogsHasMore,
  selectDogsStatus,
} from 'store/dogs/selectors'
import { Dog } from 'store/dogs/types'
import { withInfinityScroll } from 'utils/HOCs/withInfinityScroll/withInfinityScroll'
import { withLoadBreeds } from 'utils/HOCs/withLoadBreeds/withLoadBreeds'

const GalleryWithInFinityScroll = withInfinityScroll(Gallery)

export const App = compose<React.FunctionComponent>(withLoadBreeds)(() => {
  const dispatch = useDispatch()
  const currentBreed = useSelector(selectDogClassifyBreed)
  const dogsStatus = useSelector(selectDogsStatus)
  const dogsHasMore = useSelector(selectDogsHasMore)
  const dogStatus = useSelector(selectDogClassifyStatus)
  const dogs = useSelector(selectDogsByBreed)
  const handleInfinityLoadDogs = useCallback(() => {
    if (currentBreed !== null) {
      dispatch(loadDogsByBreed(currentBreed))
    }
  }, [currentBreed, dispatch])

  useEffect(() => {
    if (dogStatus === DogClassifyStatus.succeeded && currentBreed !== null) {
      dispatch(loadDogsByBreed(currentBreed))
    }
  }, [currentBreed, dogStatus, dispatch])

  return (
    <main className="App">
      <h1 className="App-title">Dogbook</h1>

      <ClassifyImageForm className="App-upload" />

      <GalleryWithInFinityScroll
        className="App-gallery"
        status={dogsStatus}
        hasMore={dogsHasMore}
        onLoad={handleInfinityLoadDogs}
      >
        <>
          {Boolean(currentBreed) && (
            <h3 className="App-galleryTitle">Gallery with same breed</h3>
          )}

          {dogs.map(({ id, url }: Dog) => (
            <Card key={id} url={url} />
          ))}
        </>
      </GalleryWithInFinityScroll>
    </main>
  )
})
