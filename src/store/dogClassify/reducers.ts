import { Reducer } from 'redux'

import {
  DOG_CLASSIFY_FAILED,
  DOG_CLASSIFY_SUCCEED,
  DOG_CLASSIFYING,
  DogClassifyActionTypes,
  DogClassifyState,
  DogClassifyStatus,
} from './types'

const initialState: DogClassifyState = {
  status: DogClassifyStatus.idle,
}

export const dogClassifyReducer: Reducer<
  DogClassifyState,
  DogClassifyActionTypes
> = (state: DogClassifyState | undefined, action: DogClassifyActionTypes) => {
  if (typeof state === 'undefined') {
    return initialState
  }

  switch (action.type) {
    case DOG_CLASSIFYING:
      return { ...state, breed: null, status: DogClassifyStatus.classifying }
    case DOG_CLASSIFY_SUCCEED:
      return {
        ...state,
        breed: action.payload,
        status: DogClassifyStatus.succeeded,
      }
    case DOG_CLASSIFY_FAILED:
      return { ...state, breed: null, status: DogClassifyStatus.failed }
    default:
      return state
  }
}
