import { normalize } from 'normalizr'
import { Reducer } from 'redux'
import { ReducersState } from 'store/types'

import { dogsSchema } from './schema'
import {
  DOGS_FAILED,
  DOGS_LOADED,
  DOGS_LOADING,
  DogsActionTypes,
  DogsState,
} from './types'

const initialState: DogsState = {
  data: {},
  error: null,
  hasMore: true,
  ids: [],
  status: ReducersState.idle,
}

export const dogsReducer: Reducer<DogsState, DogsActionTypes> = (
  state: DogsState | undefined,
  action: DogsActionTypes,
) => {
  if (typeof state === 'undefined') {
    return initialState
  }

  switch (action.type) {
    case DOGS_LOADING:
      return {
        ...state,
        error: null,
        hasMore: true,
        status: ReducersState.loading,
      }

    case DOGS_LOADED: {
      const {
        entities: { dogs },
        result,
      } = normalize(action.payload, dogsSchema)
      const ids = Array.from(new Set([...state.ids, ...result]))
      const hasMore = state.ids.length !== ids.length

      return {
        ...state,
        data: { ...state.data, ...dogs },
        hasMore,
        ids,
        status: ReducersState.succeeded,
      }
    }

    case DOGS_FAILED:
      return { ...state, status: ReducersState.failed }
    default:
      return state
  }
}
