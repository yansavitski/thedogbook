import { Action } from 'redux'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AppState } from 'store'
import { Breed } from 'store/breeds/types'
import { api } from 'utils/api'

import {
  Dog,
  DOGS_FAILED,
  DOGS_LOADED,
  DOGS_LOADING,
  DogsActionTypes,
  DogsResponseApi,
} from './types'

const BASE_URL_PREFIX = 'https://images.dog.ceo/breeds/'

const loadingDogs: DogsActionTypes = {
  type: DOGS_LOADING,
}

const loadedDogs = (dogs: Dog[]): DogsActionTypes => ({
  payload: dogs,
  type: DOGS_LOADED,
})

const failedLoadingDogs = (error: string): DogsActionTypes => ({
  error,
  type: DOGS_FAILED,
})

export const loadDogsByBreed = (
  breed: Breed,
): ThunkAction<void, AppState, null, Action> => async (
  dispatch: ThunkDispatch<AppState, null, Action>,
): Promise<void> => {
  dispatch(loadingDogs)

  try {
    const response = await api<DogsResponseApi>(
      `https://dog.ceo/api/breed/${breed}/images/random/50`,
    )
    const dogs = response.message.map((url: string) => ({
      breed,
      id: url.replace(BASE_URL_PREFIX, ''),
      url,
    }))

    dispatch(loadedDogs(dogs))
  } catch (error) {
    dispatch(failedLoadingDogs(error))

    if (IS_DEVELOP) {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }
}
