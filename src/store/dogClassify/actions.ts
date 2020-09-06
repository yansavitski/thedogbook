import { Action } from 'redux'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AppState } from 'store'
import { Breed } from 'store/breeds/types'
import { findBreedByPrediction } from 'utils/findBreedByPrediction'

import {
  DOG_CLASSIFY_FAILED,
  DOG_CLASSIFY_SUCCEED,
  DOG_CLASSIFYING,
  DogClassifyActionTypes,
} from './types'

export const setClassifyingDog: DogClassifyActionTypes = {
  type: DOG_CLASSIFYING,
}

export const setClassifyDogFailed: DogClassifyActionTypes = {
  type: DOG_CLASSIFY_FAILED,
}

export const setClassifyDogSucceed = (
  breed: Breed,
): DogClassifyActionTypes => ({
  payload: breed,
  type: DOG_CLASSIFY_SUCCEED,
})

export const setDogPredictionBreed = (
  predictionBreed: string,
): ThunkAction<void, AppState, null, Action> => (
  dispatch: ThunkDispatch<AppState, null, Action>,
  getState: () => AppState,
): void => {
  const state = getState()
  const breeds = state.breeds.data
  const targetBreed = findBreedByPrediction(predictionBreed, breeds)

  dispatch(
    targetBreed === null
      ? setClassifyDogFailed
      : setClassifyDogSucceed(targetBreed),
  )
}
