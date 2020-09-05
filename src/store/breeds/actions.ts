import { Action } from 'redux'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AppState } from 'store'
import { api } from 'utils/api'

import {
  Breed,
  BREEDS_FAILED,
  BREEDS_LOADED,
  BREEDS_LOADING,
  BreedsActionTypes,
  BreedsResponseApi,
} from './types'

const loadingBreeds = (): BreedsActionTypes => ({
  type: BREEDS_LOADING,
})

const loadedBreeds = (breeds: Breed[]): BreedsActionTypes => ({
  payload: breeds,
  type: BREEDS_LOADED,
})

const failedLoadingBreeds = (error: string): BreedsActionTypes => ({
  error,
  type: BREEDS_FAILED,
})

export const loadBreeds = (): ThunkAction<
  void,
  AppState,
  null,
  Action
> => async (dispatch: ThunkDispatch<AppState, null, Action>): Promise<void> => {
  dispatch(loadingBreeds())

  try {
    const response = await api<BreedsResponseApi>(
      'https://dog.ceo/api/breeds/list/all',
    )

    const breeds: Breed[] = Object.keys(response.message).reduce(
      (results: string[], breed: string) => {
        results.push(breed)

        const hasSubbreed: boolean = Boolean(response.message[breed].length)

        if (hasSubbreed) {
          response.message[breed].forEach((subbreed: string) => {
            results.push(`${breed}/${subbreed}`)
          })
        }

        return results
      },
      [],
    )

    dispatch(loadedBreeds(breeds))
  } catch (error) {
    dispatch(failedLoadingBreeds(error?.message))

    if (IS_DEVELOP) {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }
}
