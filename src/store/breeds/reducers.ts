import { Reducer } from 'redux'
import { ReducersState } from 'store/types'

import {
  BREEDS_FAILED,
  BREEDS_LOADED,
  BREEDS_LOADING,
  BreedsActionTypes,
  BreedsState,
} from './types'

const initialState: BreedsState = {
  data: [],
  error: null,
  status: ReducersState.idle,
}

export const breedsReducer: Reducer<BreedsState, BreedsActionTypes> = (
  state: BreedsState | undefined,
  action: BreedsActionTypes,
) => {
  if (typeof state === 'undefined') {
    return initialState
  }

  switch (action.type) {
    case BREEDS_LOADING:
      return { ...state, error: null, status: ReducersState.loading }
    case BREEDS_LOADED:
      return {
        ...state,
        data: [...state.data, ...action.payload],
        status: ReducersState.succeeded,
      }
    case BREEDS_FAILED:
      return {
        ...state,
        error: action.error,
        status: ReducersState.failed,
      }
    default:
      return state
  }
}
