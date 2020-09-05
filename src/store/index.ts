import { combineReducers } from 'redux'

import { breedsReducer } from './breeds/reducers'

export const rootReducer = combineReducers({
  breeds: breedsReducer,
})

export type AppState = ReturnType<typeof rootReducer>
